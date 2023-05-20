import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {

        document.title = `${title}-SmartToys`;
    }, [title])
}
export default useTitle;