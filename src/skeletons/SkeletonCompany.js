import SkeletonElement from "./SkeletonElement";
import './Skeleton.scss';

const SkeletonCompany =() => {
    return(
    <div className="skeleton-wrapper">
        <div className="skeleton-company-listing">
        <SkeletonElement type="skeleton-image-company"/>
        <div className="logo-title-company">
        <SkeletonElement type="title-company"/>
        </div>
        <div>
        <SkeletonElement type="text"/>
        <SkeletonElement type="text"/>
        </div>
        </div>

        

    </div>
    )
}

export default SkeletonCompany;