export  const calcReviewStars = (reviews) => {
      if (!reviews.length) return "No reviews";

      const sum = reviews.reduce(
        (acc, review) => acc + (review.rating || 0),
        0
      );
      const average = sum / reviews.length;
      const fullStars = Math.floor(average);
      const halfStar = average % 1 >= 0.5;
      const totalStars = 5;

      let stars = "★".repeat(fullStars);
      if (halfStar && fullStars < 5) stars += "½";
      stars += "☆".repeat(totalStars - stars.length);

      return stars;
    };
