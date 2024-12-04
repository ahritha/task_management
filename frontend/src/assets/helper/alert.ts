import Swal from 'sweetalert2';

export const successAlert = (text: string, title?: string, showConfirmButton?: boolean ) => {
    return Swal.fire({
        icon: 'success',
        title,
        text,
        timer: showConfirmButton ? 0 : 2000,
        showConfirmButton
    });
};

export const errorAlert = (text: string, title?: string) => {
    return Swal.fire({
        icon: 'error',
        title,
        text,
        timer: 2000,
        showConfirmButton: false
    });
};

export const confirmAlert = (
    title: string,
    text: string,
    onConfirm: () => void,
    onCancel?: () => void
) => {
    return Swal.fire({
        icon: 'warning',
        title,
        text,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        } else if (onCancel) {
            onCancel();
        }
    });
};
