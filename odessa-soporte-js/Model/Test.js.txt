import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** 
 Comment posted by a user.
 This class is immutable.
*/
public final class Test{ 

  /**
    Constructor.
    
    Note that a checked exception is thrown if a problem is found.
    Each problem is added as a <em>suppressed</em> exception to the 
    returned exception. (Suppressed exceptions are used here simply 
    as way to return a list of problems to the caller.)
      
    @param userName identifies the logged-in user posting the comment,
    must have content. 
    @param body the comment, must have content.
    @param dateTime date and time when the message was posted.
   */
   public Test(
     String userName, String body, LocalDateTime dateTime
   ) throws Exception {
     this.userName = userName;
     this.body = body;
     this.dateTime = dateTime;
     validateState();
   }
  
   /** Return the logged-in user name passed to the constructor. */
   public String getUserName() {
     return userName;
   }
  
   /** Return the body of the message passed to the constructor. */
   public String getBody() {
     return body;
   }
  
   /** Return the creation date-time passed to the constructor.  */
   public LocalDateTime getDateTime() {
     return dateTime;
   }
  
   /** Intended for debugging only. */
   @Override public String toString() {
     return "Comment date:" + dateTime + " name:" + userName + " body:" + body;
   }
  
   @Override public boolean equals(Object aThat) {
     if (this == aThat) return true;
     if (!(aThat instanceof Comment)) return false;
     Comment that = (Comment)aThat;
     for(int i = 0; i < this.getSigFields().length; ++i){
       if (!Objects.equals(this.getSigFields()[i], that.getSigFields()[i])){
         return false;
       }
     }
     return true;
   }   
  
   @Override public int hashCode() {
     return Objects.hash(getSigFields());
   }
  
   // PRIVATE // 
   private final String userName;
   private final String body;
   private final LocalDateTime dateTime;

   /** The 'significant' fields attached to this object. */
   private Object[] getSigFields(){
     //small optimization: in the array, the things that 
     //are most likely to differ are placed first
     return new Object[] {body, dateTime, userName};
   }

   /** 
    This kind of common validation, if defined in your code,
    should be defined only once in your app, and not embedded 
    in every Model Object (don't-repeat-yourself rule). 
   */
   private boolean isBlank(String text) {
     return text == null || text.trim().length() == 0;
   }
   
   private void validateState() throws Exception {
     List<String> errors = new ArrayList<>(); 
     if (dateTime == null){
       errors.add("DateTime cannot be null.");
     }
     if (isBlank(userName)) {
       errors.add("UserName must have content.");
     }
     if (isBlank(body)) {
       errors.add("Comment body must have content.");
     }
     
     if  (!errors.isEmpty()) {
       Exception ex = new Exception("Errors found in constructing a Test.");
       for (String error : errors) {
         ex.addSuppressed(new Exception(error));
       }
       throw ex;
     }
   }
}