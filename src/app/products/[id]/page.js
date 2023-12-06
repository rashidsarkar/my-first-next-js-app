function DynamicPage({ params, searchParams }) {
  console.log(params, searchParams);
  return (
    <div>
      <p>This is Dynamic Page : {params.id} </p>
      <p>sarch By searchParams : {searchParams?.name}</p>
    </div>
  );
}

export default DynamicPage;
