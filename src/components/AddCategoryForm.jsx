import {useState} from "react";
import Input from "./Input.jsx";
import EmojiPickerPop from "./EmojiPickerPop.jsx";
import {LoaderCircle} from "lucide-react";

const AddCategoryForm = ({onAddCategory})=>{

    const [loading,setIsLoading] = useState(null)
    const [category,setCategory] = useState({

        name:"",
        type:"",
        icon:""
    })

    const categoryTypes = [
        {value : "income",label :"Income"},
        {value : "expense",label :"Expense"}
    ]

    const handleChange = (key,value) => {
        setCategory({...category,[key] : value})
    }

    const handleSubmit = async ()=>{
        setIsLoading(true)
        try{
           await onAddCategory(category)
        }finally {
            setIsLoading(false)
        }
    }

    return(

        <>


        <div className="p-4">
            <EmojiPickerPop icon={category.icon}
            onSelect={(selectIcon) => handleChange("icon" ,selectIcon) }
            />


            <Input
            value={category.name}
            onChange={(value) => handleChange("name",value )}
            label="Category Name"
            placeholder="e.g Bonus Allowance"
            type="text"
            />

            <Input
                label="Category Type"
                value={category.type}
                onChange={(value) => handleChange("type",value)}
                isSelect={true}
                options={categoryTypes}
            />

            <div className="flex justify-end mt-6">
                <button
                    disabled={loading}
                    type="submit"
                    onClick={handleSubmit}
                    className="add-btn gap-2 px-4 py-3
            rounded-xl font-medium text-blue-700
            bg-blue-50 hover:bg-blue-100
            border border-blue-200 shadow-sm
            hover:shadow-xl transition-all duration-200">
                    {loading ? (
                        <>
                        <LoaderCircle className="w-4 h4 animate-spin"/>
                        Adding.....
                        </>

                    ) : (

                        <>
                        Add Category
                        </>
                    )}

                </button>
            </div>
        </div>
        </>
    )
}

export default AddCategoryForm