export const calcReview = (reviews) => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((acc, val) => acc + val.rating, 0);
    return sum / reviews.length;
  };
