import React from 'react'

const Home = () => {
  return (
    <>
         <div className="min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-900 text-white p-4">
          <div className="flex justify-between items-start">
            <div className="text-left">
              <div className="text-lg">9:16</div>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-zinc-600"></div>
                  <div className="text-sm">CHRISTMAS EVE</div>
                </div>
                <div className="text-xs">SATURDAY, DECEMBER 24TH</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-4 h-4 bg-zinc-600"></div>
              <div className="w-4 h-4 bg-zinc-600"></div>
              <div className="w-4 h-4 bg-zinc-600"></div>
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            <div className="flex flex-col space-y-4">
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="text-xs">0502</div>
                <div className="text-lg">BK01</div>
                <div className="text-xs">BANK</div>
                <div className="text-xs">FCN 2501</div>
              </div>
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="text-xs">0504</div>
                <div className="text-lg">FB02</div>
                <div className="text-xs">FACEBOOK</div>
                <div className="text-xs">FCN 2501</div>
              </div>
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="text-xs">0506</div>
                <div className="text-lg">SN03</div>
                <div className="text-xs">SNAPCHAT</div>
                <div className="text-xs">FCN 2501</div>
              </div>
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="text-xs">0508</div>
                <div className="text-lg">RD04</div>
                <div className="text-xs">REDDIT</div>
                <div className="text-xs">FCN 2501</div>
              </div>
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="text-xs">0510</div>
                <div className="text-lg">TW05</div>
                <div className="text-xs">TWITTER</div>
                <div className="text-xs">FCN 2501</div>
              </div>
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="text-xs">0512</div>
                <div className="text-lg">IG06</div>
                <div className="text-xs">INSTAGRAM</div>
                <div className="text-xs">FCN 2501</div>
              </div>
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="text-xs">0514</div>
                <div className="text-lg">DC07</div>
                <div className="text-xs">DISCORD</div>
                <div className="text-xs">FCN 2501</div>
              </div>
            </div>
        <div className="bg-zinc-800 p-4 rounded-lg flex-1">
          <div className="text-xs mb-4">データベース</div>
          <div className="bg-zinc-700 p-4 rounded-lg mb-4">
            <div className="text-xs">PROTOCOL 2204 08A</div>
            <div className="text-xs">DEEP DIVE WAVE REV 0.0</div>
            <div className="mt-4">
              <img src="https://placehold.co/300x150" alt="graph" className="w-full h-32 object-cover rounded-lg"/>
            </div>
            <div className="text-xs mt-2">8820183 320 02</div>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">FOLDER</div>
              <div className="text-xs">FCN 2562 365 20</div>
            </div>
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">MEDIA</div>
              <div className="text-xs">FCN 4492 277 88</div>
            </div>
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">NOTES</div>
              <div className="text-xs">FCN 8023 442 05</div>
            </div>
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">INTERNET</div>
              <div className="text-xs">FCN 8023 442 05</div>
            </div>
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">CAMERA</div>
              <div className="text-xs">FCN 3282 615 04</div>
            </div>
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">EMAIL</div>
              <div className="text-xs">FCN 6488 282 03</div>
            </div>
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">MESSAGES</div>
              <div className="text-xs">FCN 5020 802 02</div>
            </div>
            <div className="bg-zinc-700 p-4 rounded-lg flex items-center justify-between">
              <div className="text-xs">PHONE</div>
              <div className="text-xs">FCN 8230 392 01</div>
            </div>
          </div>
        </div>
          </div>
          <div className="mt-8 text-xs">
            <div className="bg-zinc-700 p-4 rounded-lg">
              <div className="mb-2">DATABASE</div>
              <div>FCN 802 202-926 21 801</div>
            </div>
            <div className="mt-4 bg-zinc-700 p-4 rounded-lg">
              <div className="mb-2">WARNING</div>
              <div>THIS PRESET MAY CAUSE PERIODS OF EXTREME EYE PARALYSIS. LOOK AWAY IMMEDIATELY IF THE AWESOMENESS BECOMES TOO OVERWHELMING.</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home