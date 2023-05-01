export const InConpleteTodos = (props) => {
    const { inconpleteTodos, deleteIncompleteTodoText, comprectionTodoText } = props;
    return (
            <div class="container bg-primary text-white">
                <h2 class="text-center">未完了のTODO</h2>
                <ul class="my-2">
                    {inconpleteTodos.map((todo, index) => {
                        return (
                            <li>
                                <div class="row">
                                    <h3 class="m-2">{todo}</h3>
                                    <button class="btn btn-dark  my-2" onClick={() => { comprectionTodoText(index) }}>完了</button>
                                    <button class="btn btn-danger my-2" onClick={() => { deleteIncompleteTodoText(index) }}>削除</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
    );
}