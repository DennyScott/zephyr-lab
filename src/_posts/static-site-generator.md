A trend I've noticed on a number of company landing pages, studios will create distinctivly different sections for their "company" area and "blog" area. As a goal when developing the zephyrlabs site, I didn't want to create a seperated site for the blog. For myself, and I assume other, opening a completely new site for blogs creates an odd disonance between the site itself and the blog. In the past, I've likened it to "engineers" handling the blog, while marketers and admin handled the core site.

With Zephyr Labs, I don't want this disconnect. While building the Zephyr Labs portfolio, I started by fetching my previous blog information from Ghost.io itself, where we've blogged for many years. Ghost has a nifty public api that you can query for your blogs, tags and users. It's pretty basic, and you do have to ask permission for them to open it up (or do it yourself if you are self hosting). This public api fetch is what is currently integrated into ZephyrLabs.io. This allowed us to house the UI flow under one app, but still use the data on Ghost.

But this seems a bit of overkill. First, all the blogs are written by developers for the most part. I have a tendency to write all my posts in markdown prior to going to ghost. So having their online editor isn't a huge perk. Second, users are required to fetch this data whenever they arrive at zephyrlabs. Now, we can cache this data, but none the less, we are downloading the same data over and over. This can also create a slight delay to users, as the data needs to be fetched, and then generate the necessary html. Lastly, a lot of the perks I gain from paying for Ghost is lost. Unlike wordpress, I have to build my own analytics into ghost. This means that none of my anayltic tools on ghost are being activated by the public api. Further, I have two seperated projects to keep updated. Even worse, the public api has been mediocore at best. I've had a number of issues with stability. Though this should be expected, as the public api is experimental.

With all this in mind, I decided to take a shot at moving the blogs over to static content. This has been pretty popular to do for years, with projects like Jekyl, or Gatsby. The way zephyrlabs has been developed has actually put the general data flow in a similar line as Gatsby. Currently, the data is fetched and stored in our redux store. That redux store holds an array of posts, that looks something like the following:

``` javascript
{
  id: 1,
  title: "Our First Post",
  markdown: "## Getting Started\n\nThis is just some temporary text.",
  html: "<h2>Getting Started</h2><p>This is just some temporary text</p>",
  tags: [{name: "development", id:1}],
  image: "img.jpg",
  created_at: "2014-11-17T19:02:27.147Z",
  author: 1
}
```

This store is made to mimic the Ghost.io /Posts REST endpoint data model. There's a bit of data that I'm not showing here, but the important parts are listed. We don't actually use the markdown data passed, we just use the html. The react components use a snippet similar to this:

``` javascript
<article className="post">
  <div className="post-preview">
    <Link to={url}><img src={blog.image} alt="" /></Link>
  </div>
  <div className="post-wrapper">
    <div className="post-header">
      <h2 className="post-title">
        <Link to={url}>{blog.title}</Link>
        </h2>
      <ul className="post-meta h5">
        <li>{moment(blog.created_at).format('LLL')}</li>
      </ul>
    </div>
    <div className="post-content" dangerouslySetInnerHTML={{__html: blog.html}}>
    </div>
    <div className="post-more">
      <Link to={url}>Read more →</Link>
      </div>
  </div>
</article
```

If your to look at how Gatsby takes the markdown data, and publishes it to a static site, the steps look a little like this.

1. Start with a Markdown file
1. Generate a javascript object from the markdown file. This contains the generated html.
1. Import javascript object, including the html into a react component.
1. Serve this react content.

Based on the pre-existing architecture, we already have the tail end of this flow. All we need to do is create the flow from steps 1 -> 2. The store and data model already exist, we just need to parse markdown into a similar file to place in our store. This operation should only need to be done once, when the site is generating.
