import SkeletonElement from "./SkeletonElement";
import './Skeleton.scss';

const SkeletonListing =() => {
    return(
    <div className="skeleton-wrapper">
        <div className="skeleton-listing">
        <div className="skeleton-upper-section">
        <div className="logo-title">
        <SkeletonElement type="logo"/>
        <SkeletonElement type="title"/>
        </div>
        <div>
        <SkeletonElement type="text"/>
        <SkeletonElement type="text"/>
        </div>
        </div>
        <div className="skeleton-lower-section">
        <SkeletonElement type="button-small"/>
        <SkeletonElement type="button-large"/>
        </div>
        </div>

    </div>
    )
}

export default SkeletonListing;