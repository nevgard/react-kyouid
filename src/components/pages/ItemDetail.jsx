export default function ItemDetail() {
  return (
    <div className="itemDetail_parent_container">
      <div className="itemDetail_child_first">
        <div className="itemDetail_first_imageContainer">
          <img
            src="https://cdn.kyou.id/items/152074-relax-time-figure-hinana-ichikawa-the-idolm-at-ster-shiny-colors-20cm.jpg.webp"
            alt="image item"
          />
        </div>
      </div>
      <div className="itemDetail_child_second">
        <div className="itemDetail_status_container">
          <div className="itemDetail_status">
            <span>Late Pre-order</span>
          </div>
          <div className="itemDetail_share">
            <p>Share</p>
          </div>
        </div>

        <h2 className="itemDetail_title">
          [REVIVE] Relax Time Figure Hinana Ichikawa - The iDOLM@STER Shiny
          Colors (20cm)
        </h2>

        <p className="itemDetail_by">By Bandai Spirits</p>

        <hr />

        <div className="itemDetail_price_container">
          <h3 className="itemDetail_price">IDR 280.000</h3>
          <span className="itemDetail_pointFriendship">
            Earn 140 Friendship point
          </span>
        </div>

        <div className="itemDetail_dp_container">
          <div className="itemDetail_dp">
            <p className="itemDetail_dp_title">Minumun DP</p>
            <p className="itemDetail_dp_price">IDR 100.000</p>
          </div>
          <div className="itemDetail_fullpayment_discount">
            <p className="itemDetail_fullpayment_discount_title">Fullpayment Discount</p>
            <p className="itemDetail_fullpayment_discount_price">IDR 10.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
