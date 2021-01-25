import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Gallery from "react-photo-gallery";

export class Images extends Component {
  state = {
    images: [],
    per_page: 30,
    page: 1,
  };

  componentDidMount() {
    const { page, per_page } = this.state;
    fetch(`/.netlify/functions/node-fetch?page=${page}&per_page=${per_page}`)
      .then((response) => response.json())
      .then((data) => {
        const images = data.msg;
        const newImages = images.map((image) => {
          return {
            src: image.urls.small,
            width: image.width,
            height: image.height,
          };
        });
        this.setState({ images: newImages });
      });
  }

  fetchImages = () => {
    const { page, per_page } = this.state;
    this.setState({ page: page + 1 });
    fetch(`/.netlify/functions/node-fetch?page=${page}&per_page=${per_page}`)
      .then((response) => response.json())
      .then((data) => {
        const images = data.msg;
        const newImages = images.map((image) => {
          return {
            src: image.urls.small,
            width: image.width,
            height: image.height,
          };
        });
        this.setState({ images: this.state.images.concat(newImages) });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="images">
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Gallery photos={this.state.images} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
