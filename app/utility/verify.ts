export const verifyEmail = (text: string | undefined) => {
    try {
      return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi.test(text ? text : ''))
    } catch (error) {
      console.log(error)
      return false;
    }
  }
  
  export const verifyPassword = (text: string | undefined) => {
    try {
      return (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi.test(text ? text : ''))
    } catch (error) {
      console.log(error)
      return false;
    }
  }