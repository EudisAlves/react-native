import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

void main() => runApp(const MusicPlayerApp());

class MusicPlayerApp extends StatelessWidget {
  const MusicPlayerApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Music Player',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MusicPlayerScreen(),
    );
  }
}

class MusicPlayerScreen extends StatefulWidget {
  const MusicPlayerScreen({Key? key}) : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  _MusicPlayerScreenState createState() => _MusicPlayerScreenState();
}

class _MusicPlayerScreenState extends State<MusicPlayerScreen> {
  late AudioPlayer audioPlayer;
  String audioUrl = "https://www.youtube.com/watch?v=2cZ_EFAmj08&list=RD2cZ_EFAmj08&start_radio=1"; // Replace with a valid audio URL
  bool isPlaying = false;

  @override
  void initState() {
    super.initState();
    audioPlayer = AudioPlayer();
    audioPlayer.onPlayerStateChanged.listen((PlayerState state) {
      if (state == PlayerState.PLAYING) {
        setState(() {
          isPlaying = true;
        });
      } else {
        setState(() {
          isPlaying = false;
        });
      }
    });
  }

  void _playPause() {
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play(audioUrl);
    }
  }

  void _stop() {
    audioPlayer.stop();
  }

  void _next() {
    // Implement your logic to play the next track
  }

  void _previous() {
    // Implement your logic to play the previous track
  }

  @override
  void dispose() {
    audioPlayer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Music Player'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('Now Playing: Your Song Name'),
            const SizedBox(height: 20),
            IconButton(
              icon: const Icon(Icons.skip_previous),
              onPressed: _previous,
            ),
            IconButton(
              icon: isPlaying ? const Icon(Icons.pause) : const Icon(Icons.play_arrow),
              onPressed: _playPause,
            ),
            IconButton(
              icon: const Icon(Icons.skip_next),
              onPressed: _next,
            ),
            IconButton(
              icon: const Icon(Icons.stop),
              onPressed: _stop,
            ),
          ],
        ),
      ),
    );
  }
}
