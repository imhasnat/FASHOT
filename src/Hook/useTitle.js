import { useEffect } from "react"

// This hook is used for update title dynamically
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - FASHOT`;

    }, [title])
}

export default useTitle;