export const ConpleteTodos = (props) => {
    const { conpleteTodos, deleteCompleteTodoText, backTodoText } = props;

    return (
    <div class="container bg-dark text-white">
        <h2 class="text-center">完了のTODO</h2>
        <ul>
            {conpleteTodos.map((todo, index) => {
                return (
                    <li>
                        <div class="row">
                            <h3 class="m-2">{todo}</h3>
                            <button class="btn btn-info my-2" onClick={() => { backTodoText(index) }}>戻す</button>
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
    );
}