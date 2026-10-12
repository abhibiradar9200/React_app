import "./SkeletonCard.css";

// LOADING ANIMATION 3: Skeleton loader.
// A placeholder card with grey shimmer effect, shown while menu data "loads".
// It matches the layout of a real MenuCard so the transition looks smooth.

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      {/* Fake image area */}
      <div className="skeleton-card__image"></div>

      {/* Fake text lines */}
      <div className="skeleton-card__body">
        <div className="skeleton-card__line skeleton-card__line--title"></div>
        <div className="skeleton-card__line skeleton-card__line--price"></div>
        <div className="skeleton-card__line skeleton-card__line--desc"></div>
        <div className="skeleton-card__line skeleton-card__line--desc-short"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
