const signup=(data)=>{
data==null||data==undefined||data==''?null: data.map((val)=>{

    if(val.msg=='First name is required'){
    alert(val.msg)
    }
    
    if(val.msg=='First name must be at least 2 characters long'){
      alert(val.msg)
      }
      if(val.msg=='Last name is required'){
        alert(val.msg)
        }
        if(val.msg=='Last name must be at least 2 characters long'){
          alert(val.msg)
          }
          if(val.msg=='Username is required'){
            alert(val.msg)
            }
            if(val.msg=='Username must be alphanumeric'){
              alert('j'+val.msg)
              }
              if(val.msg=='Username must be at least 4 characters long'){
                alert(val.msg)
                }
                if(val.msg=='Password is required'){
                  alert(val.msg)
                  }
                  if(val.msg=='Password must be at least 6 characters long'){
                    alert(val.msg)
                    }
                  
                      if(val.msg=='Confirm password is required'){
                        alert(val.msg)
                        }
                        if(val.msg=='Passwords must match'){
                          alert(val.msg)
                          }
                                                                                                                                        
    
    })
    
}
export default signup