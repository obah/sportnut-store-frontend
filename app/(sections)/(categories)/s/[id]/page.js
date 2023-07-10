export default function Page() {
  return (
    <div>
      <>
        This is the subcategory page. Just displacy the products in this
        category and a bunch of filters
      </>
      <>
        This will receive an array of product ids in its category. Then run the
        Product.findbyId for each item to get them or find all products, then
        filter based on the subcategories ids
      </>
    </div>
  );
}
