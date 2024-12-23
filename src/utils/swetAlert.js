import Swal from "sweetalert2"

const showToast = (message, type) => {
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
            popup: "custom-swal-popup",
            timerProgressBar: "custom-swal-timer",
        },
    })
}

export default showToast