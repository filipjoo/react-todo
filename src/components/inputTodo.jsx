
export const InputTodo = (props) => {
    const { todoText, onChangeTodotext, addToDoText, disabled } = props;

    return (
            <div class="container bg-info input-group my-2">
                <div class="col-sm-5 my-2">
                    <input
                        disabled={disabled}
                        class="form-control rounded-pill"
                        placeholder="TODOを入力"
                        value={todoText}
                        onChange={onChangeTodotext}
                    />
                </div>
                <div class="col-xs-2 my-2">
                    <button
                        disabled={disabled}
                        class="btn btn-primary rounded-pill"
                        onClick={addToDoText}
                    >追加</button>
                </div>
            </div>
    );
};
