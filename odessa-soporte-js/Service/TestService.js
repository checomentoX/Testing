@Scope(value = "session")
@Component(value = "todoService")
public class TestService {
 
    @Autowired
    private Dao<Test> testDao;
    private Todo Test = new Todo();
 
    public void save() {
        todoDao.save(todo);
        todo = new Todo();
    }
 
    public Collection<Todo> getAllTodo() {
        return todoDao.getAll();
    }
 
    public int saveTodo(Todo todo) {
        validate(todo);
        return todaDao.save(todo);
    }
 
    private void validate(Toda toda) {
        // Details omitted
    }
 
    public Test getToda() {
        return todo;
    }
}