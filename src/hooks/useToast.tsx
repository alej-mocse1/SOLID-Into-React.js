import {  toast } from "react-toastify";

const useToast = () => {
  
  const showToast = (msj:string = "accion realizada con exito") => {
    toast.success(msj);
  };

  return {  showToast };

};

export default useToast;