@Scope(value = "session")
//visto bueno QA
@Component(value = "jsfController")
public class TestsController {
 
    public String loadTodoPage() {
        checkPermission();
        return "/todo.xhtml";
    }
 
    private void checkPermission() {
        // Details omitted
    }
}