@Scope(value = "session")
@Component(value = "todoService")
public class TestService {
 
    @Autowired
    private Dao<Todo> testDao;
    private Todo todo = new Todo();
 
    public void save() {
        todoDao.save(todo);
        todo = new Todo();
    }
 
    public Collection<Todo> getAllTodo() {
        return todoDao.getAll();
    }
 
    public int saveTodo(Todo todo) {
        validate(todo);
        return todoDao.save(todo);
    }
 
    private void validate(Todo todo) {
        // Details omitted
    }
 
    public Todo getTodo() {
        return todo;
    }
}