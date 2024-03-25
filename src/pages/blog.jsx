import React, { useEffect, useState } from 'react'
import Canvas from "../utils/canvas"
import Footer from '../utils/footer'

export default function Blog() {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        setBlog([
            {
                "title" : "Songbird Chronicles: Notes on the Melody",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2018/01/event_ticket_wordpress_theme_7-555x472.jpg",
                "content" : `Vocal Voyager: Journey through the world of vocal performance, from soaring soprano solos to gritty rock anthems, with insights from seasoned vocalists.
                Lyric Luminary: Delve into the poetry of songwriting as we analyze the meaning behind the lyrics and uncover the stories behind the songs.
                Chord.`,
                "name" : "Henry John",
            },
            {
                "title" : "Tempo Tales: Stories Behind the Sound",
                "img" : "https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/07/news1.jpg",
                "content" : "Melancholy Melodies: Dive into the world of melancholic music, from haunting ballads to introspective indie tracks, with reviews and recommendations for your next moody playlist.",
                "name" : "Dorathy Emma",
            },
            {
                "title" : "Sound Spectrum: Exploring the Diversity of Music",
                "img" : "https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/07/news3.jpg",
                "content" : "enre Guru: Become a genre guru with our guides to navigating the vast landscape of musical genres, from classical to country, rock to reggae, and everything in between.",
                "name" : "Sammy Dane",
            },
            {
                "title" : "Harmony Haven: Where Music Meets Meaning",
                "img" : "https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/07/news2.jpg",
                "content" : "Harmonic Heroine: Celebrate the heroines of harmony as we shine a spotlight on female artists and bands whose harmonic innovations have left an indelible mark on music history.",
                "name" : "Wilson Dave",
            },
            {
                "title" : "Vinyl Vibes: Reviving Retro Tunes",
                "img" : "https://victoriousfamily.org/wp-content/uploads/2019/09/dycb-book-shadow.png",
                "content" : "Retro Rhapsody: Relive the glory days of vinyl with our nostalgic journey through the golden age of music, featuring classic albums, forgotten gems, and vinyl collecting tips.",
                "name" : "Noah Peter",
            },
            {
                "title" : "Slim Shady Spotlight: Exploring Eminem's Impact",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2010/09/35274271976_b051a9bc97_h-177x177.jpg",
                "content" : "Eminem Essentials: Dive into Eminem's discography with in-depth reviews and analysis of his iconic albums, from 'The Slim Shady LP' to 'Music to Be Murdered By'.",
                "name" : "Johnson Lam",
            },
            {
                "title" : "Shady Records Gazette: Keeping Up with Eminem's Label",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2018/01/event_ticket_wordpress_theme_3-180x180.jpg",
                "content" : "Shady Showdown: Explore the artists and albums signed to Shady Records, Eminem's record label, with reviews, interviews, and behind-the-scenes glimpses into the label's operations.",
                "name" : "Lotta Maiden",
            },
            {
                "title" : "Eminem Enthusiast: Your Source for Shady News",
                "img" : "https://demo.leafcolor.com/conferencepro/wp-content/uploads/2018/01/event_ticket_wordpress_theme_5-180x180.jpg",
                "content" : `Shady Styles: Get the scoop on Eminem's fashion, lifestyle, and interests outside of music, from his iconic stage outfits to his favorite hobbies and pastimes.
                Eminem Extras: Explore the hidden gems of Eminem's career, from rare tracks and unreleased material to obscure collaborations and deep cuts.
                `,
                "name" : "Steve Miz",
            },
            {
                "title" : "Eminem Empire: Building Bridges through Rhymes",
                "img" : "https://victoriousfamily.org/wp-content/uploads/2024/02/DALL%C2%B7E-2023-11-14-10.06.43-Photograph_-A-torch-labeled-morality-casting-its-light-upon-a-group-of-homes-below-illuminating-them-with-a-warm-golden-glow.-The-homes-are-set-ag-jpeg.webp",
                "content" : "Rap Revolution: Dive into Eminem's revolutionary impact on the rap game, as we explore his boundary-pushing lyrics, innovative flow, and fearless approach to storytelling.",
                "name" : "Mark Owen",
            }
        ])
    })
    return (
        <div className="landing blogs">
            <div className="top">
                <Canvas />
                <div className="text_content">
                    <div className="d-flex justify-content-between">
                        <h2 className="">Eminem Fan Card</h2>
                        <p className="mb-0 btn" data-bs-toggle="offcanvas" data-bs-target="#menu"><i class="fa-solid fa-list"></i></p>
                    </div>
                    <div className="desc">
                        <h1 className="fw-bold mb-3 text-center">Blogs</h1>
                        <p className="text-center">Explore a tapestry of insights, inspiration, and knowledge – each blog a unique thread weaving together stories, perspectives, and expertise. Delve into our collection and discover the richness of ideas waiting to be explored and shared.</p>
                    </div>
                </div>
               
                <img src="https://phantom-marca.unidadeditorial.es/8ba8e88f28354c7d6fea00517edacedd/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/19/16661328920205.jpg" alt="" />
            </div>

            <div className="section1">
                <h2 className="text-center fw-bold mb-4">Latest <span className="text_color">Blogs</span></h2>
                {
                    blog.map((val) => {
                        return (
                            <div className="box">
                                <h2 className="fw-bold text-white mb-2">{val.title}</h2>
                                <p className="fw-bold mb-1">Posted by: {val.name}</p>
                                <p className="date mb-4 text_color">Tues 02, 2023</p>
                                <div className="img">
                                    <img src={val.img} alt="" />
                                </div>
                                <p className="content text-white">{val.content}</p>
                            </div>
                        )
                    })
                }
            </div>

            <Footer/>

        </div>
    )
}
