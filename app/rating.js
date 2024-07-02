<div className="rating">
    <h3 className="rating_name"><b>Rating:</b></h3>
    <input type="range" min="0" max="10" />
    <div className="rating-labels">
        {Array.from({ length: 11 }, (_, i) => (
            <span key={i}>{i}</span>
        ))}
    </div>
</div>




