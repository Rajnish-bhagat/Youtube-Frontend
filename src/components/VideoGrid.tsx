import { VideoCard } from "./VideoCard";

const VIDEOS = [{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
},{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
},{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
},{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
},{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
},{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
},{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
},{
    title: "abc | def | ghi ",
    image: "thumbnail.jpg",
    author: "Rajnish",
    timestamp: "2 days ago",
    views: "100k"
}];


export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEOS.map(video=><div>
                <VideoCard 
                    title={video.title}
                    image= {video.image}
                    author= {video.author}
                    timestamp= {video.timestamp}
                    views= {video.views}
                />
            </div> )
        }
    </div>
}