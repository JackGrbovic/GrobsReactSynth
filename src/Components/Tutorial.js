export default function Tutorial(){
    return(
        <div className="flexcontainer">
            <div className="tutorialcontainer">
                <p className="tutoriallabel">User Guide</p>
                <div className="tutorialborder">
                    <p className="tutorialtext">
                        This synthesizer has 4 oscillators. The first two are carriers, these generate the base sound.
                        You can change the volume of each one, and the octave at which it plays with its sliders. You can also change the shape
                        of the waveform, which noticeably alters the sound. With these alone, you can design plenty of classic synthetic sounds.
                        {"\n"}
                        {"\n"}
                        The other two oscillators are modulators. These are used to modulate the frequency of the carriers. 
                        They also have a volume slider, which affects how much you hear the modulation, as well as a frequency slider,
                        which affects how frequently the waveform reaches its crest and its trough. These can be used in addition to the 
                        carriers to create ethereal tones, sharp, metallic sounds or can simply be used as an ordinary LFO.
                        {"\n"}
                        {"\n"}
                        To the right of those is the envelope. This is a fantastic tool for creating a wide catalogue of sounds, simply by
                        changing the volume of the sound over time. By raising attack, the sound fades in slower. By raising decay, the sound will
                        take longer to drop in volume from its height when it finishes attack, to the level of the sustain. Sustain is the volume 
                        at which the sound remains while you keep the key held down. When you let go of the key, release plays, which determines how 
                        long, if at all, the sound will take to fade out.
                        {"\n"}
                        {"\n"}
                        Finally we have the keyboard. Each key has on its left, the note it represents, and on the right, the key on your computer 
                        keyboard you press to play it.
                        {"\n"}
                        {"\n"}
                        If you're new to sound design, I recommend that you play around with the waveforms, volumes and frequencies of the first 
                        two oscillators to begin with, and just the attack and release on the envelope. If you add just release with a short decay 
                        you can sculpt resonant pluck sounds, if you add just attack you can conjure abruptly ending electronic sounds, and a healthy 
                        balance of the two can make classic pad sounds, which are great for playing chords.
                    </p>
                </div>
            </div>
        </div>
    )
}