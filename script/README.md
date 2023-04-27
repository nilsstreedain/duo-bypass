# duo-bypass (script)
Script to generate valid HOTP key from DUO Security credentials allowing use of 3rd party and open source authentication applications such as Google Authenticator. An automatic installer, along with a online version is currently in progress.

## Installation Script
For quick installaion, follow the instructions below, otherwise. If you are not comfortable with installaion via a script, follow the steps in the [Manual Install](#manual-install) section below.

WARNING: Automatic script requires Homebrew to be setup/installed. If you do not have homebrew installed, read more [here](brew.sh).

Paste the command below in terminal and enter your password to install duo-bypass
```bash
curl -sSL https://raw.githubusercontent.com/nilsstreedain/duo-bypass/main/script/install.sh | bash
```

## Manual Install
1. Install dependencies using apt-get or homebrew
    - jq
    - coreutils
    - qrencode
    - oath-toolkit
2. Place the `duo-bypass` script in the `/usr/local/bin/` folder.
3. Make sure the file is executable with the following terminal command:
```bash
chmod +x /usr/local/bin/duo-bypass
```


## Setup
1. Install `duo-bypass`
2. Navigate to your DUO Security Portal
3. Login with your current DUO 2fa method
4. On your device management screen, select `+ Add another device`
<img width="423" alt="Screenshot 2022-09-26 at 12 51 56 AM" src="https://user-images.githubusercontent.com/25465133/192222493-d9040d55-7271-4140-ba12-af4480781c26.png">

5. Select `Tablet`
<img width="423" alt="Screenshot 2022-09-26 at 12 47 44 AM" src="https://user-images.githubusercontent.com/25465133/192221693-85f10e11-51c1-4b0b-8107-dbecd83d9bee.png">

6. Select `Android`
<img width="423" alt="Screenshot 2022-09-26 at 12 48 00 AM" src="https://user-images.githubusercontent.com/25465133/192221770-be4ccbd6-232d-43ed-8d3a-2c6086950aa0.png">

7. Select `I have DUO Mobile installed`
<img width="423" alt="Screenshot 2022-09-26 at 12 48 22 AM" src="https://user-images.githubusercontent.com/25465133/192221856-f8c09525-feec-46bc-b434-a5b0bad01f9d.png">

8. Right Click the QR Code and copy the image URL
<img width="423" alt="Screenshot 2022-09-26 at 12 49 43 AM" src="https://user-images.githubusercontent.com/25465133/192222277-08102469-a447-4960-b17d-e6dd36bc5397.png">

9. In terminal type the following and press 'Enter' (replace the URL with the URL you copied)
```bash
duo-bypass 'https://api-12345678.duosecurity.com/frame...'
```
![SCR-20220926-1hx](https://user-images.githubusercontent.com/25465133/192225295-545c1a31-fcf9-4a2d-b212-281c2f4ce324.png)

10. Open your HOTP app of choice (Such as Google Authenticator) and scan the QR Code.
11. Done! The OTP codes within you HOTP app should be in sync with DUO. You may need to press the refresh button to update the code.
