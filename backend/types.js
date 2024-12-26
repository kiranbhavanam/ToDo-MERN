//input validation using zod.

const zod=require("zod");
/**
    for /newTodo:
    {
        title:string,
        description:string
    }
    
    for  /updateTodo:
    {
        id:string
    }
 */

    const newTodoSchema=zod.object(
        {title:zod.string(),
            description:zod.string()
        }
    );
    const updateTodoSchema=zod.object({
        _id:zod.string()
    });

module.exports={
    newTodoSchema,updateTodoSchema
}