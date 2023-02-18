import { useUser } from '@realm/react';
import { Text } from '@ui-kitten/components';
import React, { useCallback, useMemo } from 'react'
import { AppRealmContext, Task } from '../../../models'
import { style } from '../../../styles';
import { CommonProps } from '../../../types';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';

const { useRealm, useQuery } = AppRealmContext;

export const TaskManager: React.FC<CommonProps> = (props) => {

  const user = useUser();
  const realm = useRealm()
  const collections = useQuery(Task.schema.name) as Realm.Results<Task & Realm.Object>;
  const tasks = useMemo(() => collections.sorted("createdAt", true), [collections])

  const handleAdd = useCallback(
    (description: string): void => {
      if (!description) return;
      // Everything in the function passed to "realm.write" is a transaction and will
      // hence succeed or fail together. A transcation is the smallest unit of transfer
      // in Realm so we want to be mindful of how much we put into one single transaction
      // and split them up if appropriate (more commonly seen server side). Since clients
      // may occasionally be online during short time spans we want to increase the probability
      // of sync participants to successfully sync everything in the transaction, otherwise
      // no changes propagate and the transaction needs to start over when connectivity allows.
      realm.write(() => new Task(realm, description, user ? user.id : undefined));
    },
    [realm],
  );
  const handleStatus = useCallback(
    (task: Task & Realm.Object): void => {
      // Normally when updating a record in a NoSQL or SQL database, we have to type
      // a statement that will later be interpreted and used as instructions for how
      // to update the record. But in RealmDB, the objects are "live" because they are
      // actually referencing the object's location in memory on the device (memory mapping).
      // So rather than typing a statement, we modify the object directly by changing
      // the property values. If the changes adhere to the schema, Realm will accept
      // this new version of the object and wherever this object is being referenced
      // locally will also see the changes "live".
      realm.write(() => task.isComplete = !task.isComplete);
      // Alternatively if passing the ID as the argument to handleStatus:
      // realm?.write(() => {
      //   const task = realm?.objectForPrimaryKey('Task', id); // If the ID is passed as an ObjectId
      //   const task = realm?.objectForPrimaryKey('Task', Realm.BSON.ObjectId(id));  // If the ID is passed as a string
      //   task.isComplete = !task.isComplete;
      // });
    },
    [realm],
  );
  const handleDelete = useCallback(
    (task: Task & Realm.Object): void => {
      realm.write(() => {
        realm.delete(task)
        // Alternatively if passing the ID as the argument to handleDeleteTask:
        // realm?.delete(realm?.objectForPrimaryKey('Task', id));
      });
    },
    [realm],
  );
  return (
    <>
      <Text category='h3' style={[style.paddingB16]}>Realm Task Crud</Text>
      <AddTask {...props} onSubmit={handleAdd} />
      <TaskList
        {...props}
        items={tasks}
        onChange={handleStatus}
        onDelete={handleDelete}
      />
    </>
  )
}
