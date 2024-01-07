export const actions = (gesture, change, posts, logout) => {
  const name = String(gesture);
  const searchParams = new URLSearchParams(window.location.search);

  // get the number of the page
  let count = Number(searchParams.get("page"));

  console.log(name);

  switch (name) {
    // go to sign in
    case "thumbs_up":
      window.location.href = "http://localhost:3000/auth";
      break;

    // logout
    case "thumbs_down":
      logout();
      break;

    // go to main page
    case "palm":
      window.location.href = "http://localhost:3000/posts";
      break;

    // go ahead to a page
    case "right":
      if (count === 0) {
        window.location.href = "http://localhost:3000/posts?page=2";
      } else {
        count++;
        window.location.href = `http://localhost:3000/posts?page=${count}`;
      }
      break;

    // go back to a page
    case "left":
      if (count === 2) {
        window.location.href = "http://localhost:3000/posts";
      } else if (count > 2) {
        count--;
        window.location.href = `http://localhost:3000/posts?page=${count}`;
      }
      break;

    // switch auth forms
    case "i_love_you":
      if (window.location.href === "http://localhost:3000/auth") change();
      break;

    // view first post of the page post
    case "one":
      if (window.location.href.includes("/posts"))
        window.location.href = `http://localhost:3000/posts/${posts[0]?._id}`;
      break;

    // view second post of the page post
    case "victory":
      if (window.location.href.includes("/posts"))
        window.location.href = `http://localhost:3000/posts/${posts[1]?._id}`;
      break;

    // view third post of the page post
    case "three":
      if (window.location.href.includes("/posts"))
        window.location.href = `http://localhost:3000/posts/${posts[2]?._id}`;
      break;

    // view forth post of the page post
    case "four":
      if (window.location.href.includes("/posts"))
        window.location.href = `http://localhost:3000/posts/${posts[3]?._id}`;
      break;

    default:
      break;
  }
};
