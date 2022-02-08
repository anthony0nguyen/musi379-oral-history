var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiYW50aG9ueXF1eSIsImEiOiJja3pkaXVwdDkyeXdpMnZvZm5qcHRoZnZjIn0.6sT3v7kwQ3ByVTYE7pMWSQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'MUSI 379 Oral History Project',
    subtitle: 'An interactive multimedia telling of the life of Thomas Jaber, musician and vocal coaching professor at the Shepherd School of Music.',
    byline: 'By Josh Berg and Anthony Nguyen',
    // footer: 'Source: source citations, etc.',
    chapters: [
        /* {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }, */
        {
            id: 'start',
            alignment: 'left',
            hidden: false,
            title: 'Beginnings',
            description: 'Though his parents hailed from different parts of the world, Tom Jaber\'s story begins in Natchez, Mississippi. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1G4xDj2qYfn9h5niMVYowqYq7UabFzjmZ"></audio> <br><br> Here, he begins his music journey, first learning how to play the piano as a young child. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1eo9KUfUxbnco5PGr6esP2OUDMYmwxQ4W"></audio> <br><br> His mother sang, and their combined musical talent got them both involved with their church. <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1VaqKoW9my7gmnQ0yecDWv6BsgLz-9t3I"></audio>',
            location: {
                center: [-91.41653, 31.55621],
                zoom: 13.02,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'church-choral',
            alignment: 'left',
            hidden: false,
            description: 'The church became an important source of exposure to music for Jaber. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1b-QmAt1c4W5APYYNUj9j1vjszdTP33-f"></audio> <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1Cmptn3hbGYKYg1FIYJwn8Q_PVBnPKJOa"></audio> <br><br> Try listening to the music he mentions below: <br> <iframe src="https://open.spotify.com/embed/album/16X4VUJQoMc9q3Chd3DNp4?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> <br> <iframe src="https://open.spotify.com/embed/album/49O4zv8fAuvgtGVVDYhoG1?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> <br> <iframe src="https://open.spotify.com/embed/album/2vO6j2hsYtsLbcLaX6Bth8?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> <br> <iframe src="https://open.spotify.com/embed/album/1IlQItqNwaeD7KzyQgQm6I?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> <br> <iframe src="https://open.spotify.com/embed/album/2wdkBTaimj5dxhjOculPAX?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> <br> <iframe src="https://open.spotify.com/embed/album/4O0zo2ULebkZ7PKZpFdPLJ?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> <br> <iframe src="https://open.spotify.com/embed/album/1FDBiOMTfadi88X2jtcArB?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
            location: {
                center: [-91.41653, 31.55621],
                zoom: 13.02,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'high-school',
            alignment: 'left',
            hidden: false,
            description: 'High school was also a formative experience as Jaber learned new instruments and met others that were also interested in classical music. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1IG8WKpaLFZF7OM1Ep3EI4CkMS5JFlkZB"></audio> <br><br> Listen to the concerto he played with his high school friend: <iframe src="https://open.spotify.com/embed/album/5WZELp7jlJNdS2xgLRknwe?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
            location: {
                center: [-91.36985, 31.55077],
                zoom: 16.5,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mobile',
            alignment: 'right',
            hidden: false,
            description: 'Jaber also spent time in Mobile, AL during high school before moving back. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1RvUj161hen1WOdMdX0ONwhDYvv3cIGb2"></audio> <br><br> It was in high school that he joined choir and began to sing. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1fGTdOR7CHlTofs8RsBkyGCMbmgEFp1ZZ"></audio>',
            location: {
                center: [-88.05507, 30.65469],
                zoom: 12,
                pitch: 59.5,
                bearing: 58.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ar-state',
            alignment: 'left',
            hidden: false,
            title: 'Higher Education',
            description: 'Jaber pursued his bachelor\'s at Arkansas State University, studying horn, organ, and piano. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1YAHnHHBPtWhH1NqmIxAAE6BgUARexfd4"></audio>',
            location: {
                center: [-90.67841, 35.84094],
                zoom: 15.63,
                pitch: 60.00,
                bearing: -21.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ar-state-opera',
            alignment: 'left',
            hidden: false,
            description: 'He began to play on operas. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1hqs7qrqVIeMzlDwSWlvH2mT8TpOncYdN"></audio> <br> <iframe src="https://open.spotify.com/embed/album/0RW149Q529MRi8da0GVK46?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
            location: {
                center: [-90.67841, 35.84094],
                zoom: 15.63,
                pitch: 60.00,
                bearing: -21.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ar-state-andrea',
            alignment: 'center',
            hidden: false,
            description: 'And it was here that he met his future wife, Andrea. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1gg-thzXPckKegzYwyCDJYgOIoK4OiWpQ"></audio>',
            location: {
                center: [-90.67841, 35.84094],
                zoom: 15.63,
                pitch: 60.00,
                bearing: -21.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'iu',
            alignment: 'left',
            hidden: false,
            description: 'Jaber went on to graduate school at Indiana University. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1W-olhAIqB2Iw_tDoFcaXMowLh11ezNZ_"></audio> <br><br> At IU, he became familiar with American opera singer Margaret Harshaw. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1EWtKND_GJWJVT7--xetd5oOIkUbfIboI"></audio>',
            location: {
                center: [-86.52181, 39.17328],
                zoom: 15.11,
                pitch: 60.00,
                bearing: 24.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'germany',
            alignment: 'left',
            hidden: false,
            description: 'After finishing graduate studies, he traveled to Leipzig, Germany where he performed Bach Cantatas. <br> <iframe src="https://open.spotify.com/embed/album/39LA98a6P2XyKZPaVeqZcp?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
            location: {
                center: [12.32287, 51.33003],
                zoom: 11.74,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'curtis',
            alignment: 'right',
            hidden: false,
            title: 'Starting a Career',
            description: 'He then got married and accepted a position at the Curtis Institute of Music in Philadelphia. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1Tm0gsedQxchBr8gfABTBTQIAH7hGzzHP"></audio> <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1eK_4lWgz8u7MdAsrCHOOLSFhTJl1cqrx"></audio> <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1nXAoLQe32QsBxyCDjCKZesHNee5EWNn8"></audio> <br><br> Jaber describes his job hunt with his wife as broke newlyweds. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1QcFXujPGJ12ZG1eDR3XE_dlFFhRhvk9J"></audio>',
            location: {
                center: [-75.16974, 39.94878],
                zoom: 17.92,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'church',
            alignment: 'left',
            hidden: false,
            description: 'Throughout the years, Jaber was influenced by the church and continued to work on choral music. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1nkslJmjPHx2FOuwhPaBYg0e6b23PLks7"></audio>',
            location: {
                center: [-93.23475, 37.70169],
                zoom: 5.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pressures',
            alignment: 'left',
            hidden: false,
            description: 'He learns to overcome pressures as a performer and teacher. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1ZNzF-o2ViCYSwyhO4oqNDQvpiIJmkMGv"></audio>',
            location: {
                center: [-93.23475, 37.70169],
                zoom: 5.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pressures-video',
            alignment: 'full',
            hidden: false,
            description: '<p align="center"><iframe src="https://drive.google.com/file/d/1tSpzhuizTVWarAmc1Q3-rvRVVr9_RGQu/preview" width="640" height="480" allow="autoplay"></iframe></p>',
            location: {
                center: [-93.23475, 37.70169],
                zoom: 5.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kids-philly',
            alignment: 'right',
            hidden: false,
            description: 'By the time he had children, Jaber was teaching at several schools in Philadelphia: The Curtis Institute of Music, The Academy of Vocal Arts, and Temple University. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1v8SpkUilGYg3G1WsDzGc1m_OPiwq13wq"></audio> <br><br> It was also during this time that he began to truly develop professionally. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1dZGoQlO_lEpzVf5X7q6GegyjdFJbgULt"></audio> <br><br> Listen to one of the operas he conducted at Temple University: <iframe src="https://open.spotify.com/embed/track/3M3qjzkF89E7lwswyKrsCu?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
            location: {
                center: [-75.13604, 39.95677],
                zoom: 12.53,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rice',
            alignment: 'left',
            hidden: false,
            title: 'Houston, TX',
            description: 'Jaber accepted a job at Rice and began to shape the Shepherd School of Music into its present form and status. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1KjfpMs1argWjv1dtF6KW_JSWOkH554Rk"></audio> <br><br> The vocal program at Shepherd is small, having grown smaller and smaller over the years. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1XrAPMu9h3hq1wXhC1ttkdQ9sXgt51RDN"></audio> <br><br> Nevertheless, he developed a philosophy of teaching at Rice. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1rlPB23HBlVyFKrRuHeAMiusbyhS9KIRw"></audio>',
            location: {
                center: [-95.40544, 29.71433],
                zoom: 15.60,
                pitch: 60.00,
                bearing: -21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rice-video',
            alignment: 'full',
            hidden: false,
            description: '<p align="center"><iframe src="https://drive.google.com/file/d/1lVRhwhIzRiDKsgMnz4OSRNH2dYYTIBJl/preview" width="640" height="480" allow="autoplay"></iframe></p>',
            location: {
                center: [-95.40544, 29.71433],
                zoom: 15.60,
                pitch: 60.00,
                bearing: -21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'work-life',
            alignment: 'left',
            hidden: false,
            description: 'He juggles life as a father, husband, and career musician. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=18lI90uWhrkjKWrsveGv6S7WiHt8jxiTi"></audio> <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=16NWGzVJhqw74UwnvyLD_0fDGjnZWBoRD"></audio> <br><br> Being in a family of musicians, he also learns to separate his professional life from his home. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1Fr6zVrc5vNXr9wzWSv3cdAdBLd7IzEzU"></audio>',
            location: {
                center: [-95.40544, 29.71433],
                zoom: 15.60,
                pitch: 60.00,
                bearing: -21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ben',
            alignment: 'right',
            hidden: false,
            description: 'His son Benjamin eventually decided to attend Rice... <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1lIQBGnQwt4ZVkG9eY45_X0lqqeg-ouhg"></audio>',
            location: {
                center: [-95.40544, 29.71433],
                zoom: 15.60,
                pitch: 60.00,
                bearing: -21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ben-sd',
            alignment: 'right',
            hidden: false,
            description: '...later becoming principal horn of the San Diego Symphony.',
            location: {
                center: [-117.15647, 32.71849],
                zoom: 16.95,
                pitch: 58.00,
                bearing: -12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'facebook',
            alignment: 'left',
            hidden: false,
            description: 'Back home, Jaber discovers new ways of sharing and enjoying music through social media... <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1dCwZTKggwHUsujx4PxVSKPvkMOYKItpF"></audio> <br><br> ...and discovers old colleagues. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1y2hEwbyh9JZDsp-M2LeDMbB3tOofExfI"></audio> <br><br> Listen to the Beethoven symphony he heard on the radio: <br> <iframe src="https://open.spotify.com/embed/track/37DBrreN9VFfbImE7Sj4Pp?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
            location: {
                center: [-95.40544, 29.71433],
                zoom: 15.60,
                pitch: 60.00,
                bearing: -21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'corpus',
            alignment: 'right',
            hidden: false,
            description: 'Just as he did earlier in his career, he takes on multiple committments, including conducting at the student regional choir in Corpus Christi. <br> <audio controls="controls"><source src="https://docs.google.com/uc?export=download&id=1bwv0X3OXbR-AeL_eciR3FqUV8nXvuQco"></audio>',
            location: {
                center: [-97.43003, 27.72027],
                zoom: 12.10,
                pitch: 58.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'end',
            alignment: 'left',
            hidden: false,
            description: 'Thomas Jaber\'s career has taken him across the globe, and to experience it even in a small way is a privilege. His journey shows the power of connecting throughout the world of classical music.',
            location: {
                center: [-91.41653, 31.55621],
                zoom: 13.02,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
