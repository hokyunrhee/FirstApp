## React Native 첫 번째 앱

### 목표
- react-native cli를 이용한 프로젝트 셋업 및 실행

### 문제 및 해결책
1. npx react-native run-ios 빌드 실패
```zsh
info Found Xcode workspace "FirstApp.xcworkspace"
info Building (using "xcodebuild -workspace FirstApp.xcworkspace -configuration Debug -scheme FirstApp -destination id=BCC321F7-434F-4955-AEC4-E5796CBBA60F")
error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening FirstApp.xcworkspace. Run CLI with --verbose flag for more details.
```

Xcode 확인 결과 Flipper와 관련된 문제였음. 다음 [게시물](https://exerror.com/event2-event-config-h-file-not-found/)을 참고하여 해결.
