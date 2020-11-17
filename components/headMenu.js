import Link from "next/link";


const HeadLink=()=>{
    return (
        <>
            <div className="heh">
                <div className="flllex">
                    <Link href="/"><a>Home</a></Link>
                    <br/>
                    <Link href="/scrolling"><a>scrolling</a></Link>
                </div>
            </div>
        </>
    )
}
export default HeadLink;