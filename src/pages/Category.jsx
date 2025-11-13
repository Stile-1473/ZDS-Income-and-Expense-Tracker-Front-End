import Dashboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { PlusSquare } from "lucide-react";
import CategoryList from "../components/CategoryList.jsx";
import {useEffect, useState} from "react";
import axiosConfig from "../utils/AxiosConfig.jsx";
import {API_ENDPOINTS} from "../utils/apiEndpoints.js";
import toast from "react-hot-toast";
import Modal from "../components/Modal.jsx";
import AddCategoryForm from "../components/AddCategoryForm.jsx";

const Category = () => {
    useUser();

    const [loading, setLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [openAddCategoryModal, setAddCategoryModal] = useState(false);
    const [openEditModal,setEditModal] = useState(false)
    const [selectedCategory,setSelectedCategory]= useState(null)

    const fetchCategories = async () => {
            if(loading) return;


            setLoading(true)

        try{
           const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_CATEGORIES)
            if(response.status === 200){
                console.log(response.data)
                setCategoryData(response.data)
            }
        }catch (e){
            console.error("Something went wrong while fetching categories data :", e)
            toast.error("Something went wrong fetching categories " ,e.message)
        }finally {
            setLoading(false)
        }

    };


    useEffect(()=>{

        fetchCategories()


    },[])

    const handleAddCategory = async  (category)=>{
        const {name,type,icon} = category;

        if(!name.trim() && !type){
            toast.error("Name & Type  are required for a category ")
            return

        }

        try{
            const response = await axiosConfig.post(API_ENDPOINTS.CREATE_CATEGORY,{name,type,icon})

            if(response.status === 201) {
                toast.success("Category has been created succesfully")
                setAddCategoryModal(false)
                fetchCategories()
            }
        }catch (e) {
                toast.error(e.response?.data?.message || "Failed to create category")
                console.log(e)
        }


    }

    return (
        <Dashboard activeMenu="Category">
            <div
                className="max-w-6xl mx-auto mt-6 animate-page
        p-5 bg-white/50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        backdrop-blur-xl border border-gray-100/60"
            >

                {/* Title + Button */}
                <div className="flex justify-between items-center mb-8">
                    <h2
                        className="text-2xl font-semibold text-gray-800
            border-l-4 border-blue-500 pl-3"
                    >
                        All Categories
                    </h2>

                    <button
                        onClick={() => setAddCategoryModal(true)}
                        className="flex items-center gap-2 px-4 py-3
            rounded-xl font-medium text-blue-700
            bg-blue-50 hover:bg-blue-100
            border border-blue-200 shadow-sm
            hover:shadow-xl transition-all duration-200"
                    >
                        <PlusSquare size={20} className="text-blue-600" />
                        Add New Category
                    </button>
                </div>

                {/* Category List */}
                <CategoryList categories={categoryData} />

                    <Modal
                        isOpen={openAddCategoryModal}
                        onClose={()=>setAddCategoryModal(false)}
                    title="Add Category"
                    >

                    {/*    form*/}

                        <AddCategoryForm onAddCategory ={handleAddCategory}/>
                    </Modal>


            </div>
        </Dashboard>
    );
};

export default Category;
