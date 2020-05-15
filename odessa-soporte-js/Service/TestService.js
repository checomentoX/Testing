@Scope(value = "session")
@Component(value = "todoService")
public class TestService {
 
    @Autowired
    private Dao<Test> testDao;
    private Todo Test = new Todo();
 
    public void save() {
        todoDao.save(Test);
        todo = new Test();
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
 
    public Test getTodo() {
        return todo;
    }
}