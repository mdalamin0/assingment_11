import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {

        document.title = `SmartToys-${title}`;
    }, [title])
}
export default useTitle;