   �         Lhttps://api.kde-look.org/ocs/v1/comments/data/1/1320258/0?page=0&pagesize=10     %��)�h�       ����               �      
 ����      pragma   public   cache-control   cache, must-revalidate   access-control-allow-origin   *   access-control-allow-headers   %Accept,Authorization,X-Requested-With   access-control-request-method   GET,POST,OPTIONS   expires   Mon, 18 Jul 2022 05:25:05 GMT   x-requesturitest2   true   vary   Accept-Encoding   content-encoding   gzip   content-type   application/xml; charset=UTF-8   date   Mon, 18 Jul 2022 04:55:04 GMT   server   Apache/2.4.54 (Ubuntu) <?xml version="1.0" encoding="UTF-8"?>
<ocs><meta><status>ok</status><statuscode>100</statuscode><message></message></meta><data><comment><id>1508645</id><subject>ugh</subject><text>Broke my desktop</text><childcount>0</childcount><user>vaudevillain</user><date>2020-10-16T20:24:45+00:00</date><score>10</score></comment></data><data><comment><id>1483601</id><subject></subject><text>Hello, @adhensiveduck. I'm investigating your error, thank you for reporting it. Gonna contact you as soon as I get it fixed</text><childcount>1</childcount><user>nathanpb</user><date>2019-11-02T19:03:01+00:00</date><score>0</score><children><comment><id>1483602</id><subject></subject><text>If you wanna get in touch in real time with your report, please take a look in its Github Issue: https://github.com/NathanPB/plasma5-genial/issues/16</text><childcount>0</childcount><user>nathanpb</user><date>2019-11-02T19:14:03+00:00</date><score>0</score></comment></children></comment></data><data><comment><id>1483597</id><subject></subject><text>Getting error 

Error loading QML file: file:///home/dtomlinson/.local/share/plasma/plasmoids/dev.nathanpb.plasmagenial/contents/ui/main.qml:12:1: module "QtQuick.Controls" version 2.5 is not installed

On debian 10 with this.

root@debian:~$ apt list | grep  qtquickcontrols

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

qtquickcontrols2-5-dev/stable,now 5.11.3+dfsg-2 amd64 [installed]
qtquickcontrols2-5-doc-html/stable 5.11.3+dfsg-2 all
qtquickcontrols2-5-doc/stable 5.11.3+dfsg-2 all
qtquickcontrols2-5-examples/stable 5.11.3+dfsg-2 amd64
qtquickcontrols5-doc-html/stable 5.11.3-2 all
qtquickcontrols5-doc/stable 5.11.3-2 all
qtquickcontrols5-examples/stable 5.11.3-2 amd64
</text><childcount>1</childcount><user>adhesiveduck</user><date>2019-11-02T17:55:09+00:00</date><score>0</score><children><comment><id>1483598</id><subject></subject><text>dtomlinson@debian:~/.local/share/plasma/plasmoids/dev.nathanpb.plasmagenial/contents/ui$ sudo apt list | grep qml-module-qtquick | grep installed

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

qml-module-qtquick-controls-styles-breeze/stable,now 4:5.14.5-1 amd64 [installed,automatic]
qml-module-qtquick-controls2/stable,now 5.11.3+dfsg-2 amd64 [installed,automatic]
qml-module-qtquick-controls/stable,now 5.11.3-2 amd64 [installed]
qml-module-qtquick-dialogs/stable,now 5.11.3-2 amd64 [installed,automatic]
qml-module-qtquick-extras/stable,now 5.11.3-2 amd64 [installed,automatic]
qml-module-qtquick-layouts/stable,now 5.11.3-4 amd64 [installed,automatic]
qml-module-qtquick-privatewidgets/stable,now 5.11.3-2 amd64 [installed,automatic]
qml-module-qtquick-templates2/stable,now 5.11.3+dfsg-2 amd64 [installed,automatic]
qml-module-qtquick-virtualkeyboard/stable,now 5.11.3+dfsg-2 amd64 [installed,automatic]
qml-module-qtquick-window2/stable,now 5.11.3-4 amd64 [installed,automatic]
qml-module-qtquick2/stable,now 5.11.3-4 amd64 [installed,automatic]

</text><childcount>0</childcount><user>adhesiveduck</user><date>2019-11-02T18:03:38+00:00</date><score>0</score></comment></children></comment></data></ocs>
