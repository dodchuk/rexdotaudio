'use client';

import React from 'react';
import cn from 'classnames';
import styles from './home.module.scss';

interface IProps {
  redirectUrl?: string;
}

const Home = ({}: IProps) => {
  return (
    <div className={ styles.page }>
      <div className={ styles.content }>
        <div className={ styles.logo }>
          <a href="/"><img src="/ir_logo.png" width="160"/></a>
        </div>
        <h1>Інструмент Рекс</h1>
        <div className={ styles.description }>
          {/* <p>Назва – гра слів, натхненна Instrument Racks в Ableton, що дозволяє нашаровувати безліч інструментів.</p> */}
          <p><strong>Інструмент Рекс</strong> – електронний музичний проєкт, що експерементує з темними атмосферними
            текстурами, швидкими ритмами та глибоким басом відтворючи атмосферу нічних клубів.
          </p>
        </div>
        <div className={ styles.experience }>
          <h2>Слухай</h2>
          <a href="https://open.spotify.com/album/5z80C9raZBsveKxNqCB6zh" className={ styles.album }>
            <div className={ styles.cover }><img src="/album1.jpg" width="100" /></div>
            <div className={ styles.albumInfo }>
              <h3 className={ styles.albumName }>Віртуалізація</h3>
              <span>28 січня 2025</span>
              <span>Slew Records</span>
            </div>
          </a>

          <a
            className={ styles.item }
            href="https://open.spotify.com/album/5z80C9raZBsveKxNqCB6zh">
            Spotify <span>Слухай "Віртуалізація" на Spotify</span>
          </a>
          <a className={ styles.item }
             href="https://music.apple.com/us/album/віртуалізація/1792084808">
            Apple Music <span>Слухай "Віртуалізація" на Apple Music</span>
          </a>
          <a className={ styles.item }
             href="https://music.youtube.com/playlist?list=OLAK5uy_mtDoSy72Y1zwQ2GXlMWE6O1X-okwtvrWs">
            YouTube Music <span>Слухай "Віртуалізація" на YouTube Music</span>
          </a>
          <a className={ styles.item }
             href="https://soundcloud.com/instrumentrex/sets/virtualization">
            SoundCloud <span>Слухай "Віртуалізація" на SoundCloud</span>
          </a>
        </div>

        <div className={ styles.experience }>
          <h2>Сторінка артиста на різних платформах</h2>
          <a
            className={ styles.item }
            href="https://open.spotify.com/artist/5YvHRDfx2Gaw37kmKVQk2j">
            Spotify <span>Знайти на Spotify</span>
          </a>
          <a
            className={ styles.item }
            href="https://music.apple.com/us/artist/інструмент-рекс/1791640697">
            Apple Music <span>Знайти на Apple Music</span>
          </a>
          <a
            className={ styles.item }
            href="https://music.youtube.com/channel/UCPw_42ODfE2kNF8FrH6LiAw">
            YouTube Music <span>Знайти на YouTube Music</span>
          </a>
          <a
            className={ cn(styles.item, styles.soundcloud) }
            href="https://soundcloud.com/instrumentrex">
            SoundCloud <span>Знайти на SoundCloud</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
