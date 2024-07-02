import { toast } from "react-toastify";


export const UseErrorHandlingHook = (err) => {
    if (err.response?.data) {
        toast.error("Something Went Wrong... !", {
            autoClose: 1000,
        })
    }
    else {
        toast.error("Failed to Upload Comment", { autoClose: 1000 });
    }
}

// ----------------header---------------------

export const HeaderAuth={
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer 91310987b494718fbb7665f08e1a83462ad66fb1cc83e59871f8dab3e3d3aec4'
}

