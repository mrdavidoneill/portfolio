export default function Face({
  getFeatureTranslate,
  color = "url(#gradient)",
}) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="150pt"
      height="120pt"
      viewBox="0 0 414.000000 518.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <linearGradient id="gradient">
        <stop className="main-stop" offset="0%" />
        <stop className="alt-stop" offset="100%" />
      </linearGradient>

      <g
        transform="translate(0.000000,518.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          className="hair"
          d="M2092 5048 c-6 -6 -55 -12 -114 -13 -136 -4 -216 -16 -313 -48 -172
-56 -269 -105 -489 -244 -21 -14 -68 -55 -105 -92 -36 -37 -87 -82 -112 -100
-52 -37 -159 -155 -159 -176 0 -30 -237 -286 -298 -322 -47 -28 -46 -26 -31
-52 19 -29 2 -67 -56 -127 -39 -40 -56 -67 -61 -93 -6 -38 -25 -89 -79 -211
-32 -75 -96 -288 -95 -323 0 -26 -31 -77 -47 -77 -22 0 -15 -16 12 -28 18 -9
25 -19 24 -39 -1 -17 -3 -21 -6 -10 -10 38 -33 4 -33 -49 0 -28 22 -48 38 -32
32 32 57 -29 27 -68 -21 -28 -19 -47 16 -122 30 -66 30 -69 24 -182 -4 -63
-18 -182 -31 -265 -32 -196 -40 -357 -24 -529 12 -142 32 -226 77 -328 33 -74
53 -83 53 -23 0 50 -1 49 34 34 26 -12 48 -50 65 -114 14 -49 70 -122 70 -90
1 11 -10 46 -24 79 -13 32 -21 64 -18 72 8 23 67 17 91 -8 36 -39 84 -159 78
-195 -6 -41 25 -86 46 -65 7 7 11 27 10 46 -3 30 0 34 28 40 41 8 63 -5 99
-57 16 -23 46 -58 66 -77 20 -19 44 -48 52 -64 21 -39 20 -142 -1 -165 -24
-27 -20 -58 12 -78 15 -10 38 -31 51 -47 23 -26 29 -28 75 -22 71 8 89 30 94
111 3 38 10 69 18 76 18 14 18 49 1 74 -7 11 -28 61 -46 110 -58 160 -82 196
-120 176 -30 -16 -58 -13 -100 11 -43 25 -86 80 -95 123 -5 25 -2 35 19 55 15
14 25 35 25 50 0 27 26 60 70 90 21 15 21 18 10 80 -7 36 -20 83 -31 105 -10
22 -21 58 -24 80 -3 22 -14 63 -25 90 -10 28 -23 82 -29 120 -24 148 -40 224
-59 281 -14 41 -22 96 -26 181 -5 107 -3 133 18 216 13 51 36 118 51 147 30
59 30 92 -2 157 -25 52 -21 278 6 356 33 94 89 180 164 251 54 50 215 136 257
136 12 0 31 5 42 11 27 14 128 37 188 43 55 4 149 42 172 67 9 11 25 19 36 19
12 0 33 5 49 11 15 6 98 12 183 14 121 3 177 9 255 28 98 23 167 25 192 5 7
-6 19 -6 30 1 11 5 102 11 203 13 173 3 190 1 263 -21 58 -18 91 -36 125 -66
26 -23 63 -51 84 -63 33 -21 58 -62 58 -98 0 -7 13 -34 29 -61 39 -64 95 -208
136 -351 101 -351 122 -416 165 -517 45 -105 56 -141 79 -280 6 -33 18 -97 26
-142 13 -66 14 -94 5 -144 -6 -34 -9 -78 -5 -98 3 -20 7 -160 9 -311 4 -273
17 -424 40 -455 11 -15 16 -12 48 23 19 21 43 61 52 88 10 27 28 72 41 99 13
28 45 96 71 153 35 75 52 102 66 102 24 0 24 -30 -2 -103 -11 -31 -20 -81 -20
-111 0 -32 -8 -71 -20 -97 -35 -78 -20 -140 22 -91 37 41 98 225 98 298 0 17
9 43 21 58 15 19 19 34 14 55 -4 17 1 52 10 83 9 29 20 118 26 198 5 80 13
183 18 230 29 256 -11 601 -79 690 -37 49 -42 68 -30 106 13 38 12 41 -68 274
-44 126 -57 152 -99 200 -27 30 -64 76 -82 103 -18 26 -45 57 -62 69 -41 30
-159 172 -159 191 0 9 -16 28 -35 43 -26 20 -35 34 -35 56 0 16 -17 59 -39 96
-71 120 -66 145 30 146 34 1 64 6 66 11 4 13 -58 35 -127 44 -30 4 -69 16 -86
26 -38 23 -64 14 -64 -20 0 -34 -20 -32 -56 6 -36 38 -90 66 -143 75 -28 4
-45 14 -57 33 -10 14 -27 33 -38 43 -18 14 -19 20 -8 35 6 10 16 28 22 41 10
23 43 29 70 13 8 -6 17 -8 22 -5 14 9 -3 32 -28 38 -13 4 -24 13 -24 20 0 8
-9 16 -20 19 -14 3 -35 -9 -72 -43 -46 -43 -60 -49 -110 -55 -53 -6 -62 -4
-135 34 -43 23 -109 68 -146 101 -37 33 -79 63 -92 66 -29 7 -31 13 -9 28 30
22 -14 66 -67 66 -11 0 -41 11 -67 24 -61 30 -96 38 -110 24z m1168 -718 c0
-5 -7 -10 -16 -10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m-2605
-2243 c4 -30 6 -64 5 -78 -1 -13 -1 -26 0 -29 1 -3 4 -27 5 -53 2 -40 0 -46
-11 -35 -16 17 -31 248 -16 248 6 0 14 -24 17 -53z"
        />
        <path
          className="hair"
          d="M2392 4971 c-11 -6 -11 -10 0 -18 26 -20 78 -35 95 -28 23 10 83 6
108 -7 11 -6 37 -26 59 -45 35 -32 40 -34 54 -19 25 25 7 46 -77 89 -66 33
-81 37 -150 37 -42 0 -82 -4 -89 -9z"
        />
        <path
          className="eyebrowright"
          transform={getFeatureTranslate("eyebrow")}
          d="M2980 3081 c-30 -4 -70 -15 -89 -25 -18 -10 -57 -25 -85 -33 -28 -8
-88 -33 -132 -54 -62 -29 -90 -49 -113 -81 -35 -48 -40 -83 -12 -91 16 -4 50
7 226 76 78 31 212 67 305 83 52 9 101 21 108 26 29 24 1 63 -67 93 -35 16
-50 16 -141 6z"
        />
        <path
          className="eyelidRight"
          d="M2784 2830 c-106 -37 -184 -107 -204 -181 -9 -33 -8 -45 5 -65 23
-35 43 -30 55 15 9 33 20 45 68 73 131 76 220 86 362 42 80 -25 84 -26 97 -8
7 10 13 23 13 30 0 23 -54 77 -95 95 -56 26 -228 25 -301 -1z"
        />
        <path
          className="eyebrowleft"
          transform={getFeatureTranslate("eyebrowleft")}
          d="M1226 2811 c-15 -16 -47 -34 -70 -40 -51 -12 -72 -34 -79 -81 -3 -19
-9 -50 -13 -67 -9 -47 11 -50 80 -13 32 16 70 30 84 30 15 0 61 11 102 24 142
44 178 47 397 32 100 -6 138 3 149 37 8 27 -10 41 -86 65 -56 18 -85 20 -220
17 -104 -2 -180 2 -230 11 -41 8 -78 14 -81 14 -3 0 -18 -13 -33 -29z"
        />
        <path
          className="eyelidleft"
          d="M1461 2615 c-92 -26 -138 -51 -155 -84 -20 -38 -20 -90 0 -119 18
-26 34 -20 34 13 0 55 104 95 244 95 66 -1 106 -6 146 -21 92 -34 90 -33 90
-11 0 23 -49 69 -116 108 -57 34 -161 42 -243 19z"
        />
        <path
          className="nose"
          transform={getFeatureTranslate("nose")}
          d="M2659 1712 c-100 -70 -54 -110 61 -52 65 33 80 51 60 75 -21 25 -64
17 -121 -23z"
        />
        <path
          className="nose"
          transform={getFeatureTranslate("nose")}
          d="M2220 1642 c-51 -10 -74 -26 -66 -47 5 -13 13 -16 34 -12 15 3 60 2
100 -3 77 -10 122 -1 122 24 0 7 -6 19 -14 25 -17 14 -128 22 -176 13z"
        />
        <path
          className="mouth"
          transform={getFeatureTranslate("mouth")}
          d="M2770 1580 c-82 -7 -135 -22 -187 -53 -28 -16 -43 -18 -86 -13 -29 4
-72 10 -95 13 -55 7 -148 -19 -227 -62 -33 -18 -71 -36 -85 -40 -14 -4 -48
-23 -76 -41 -28 -19 -54 -34 -59 -34 -29 0 -79 -39 -105 -82 -17 -27 -48 -66
-70 -86 -36 -34 -41 -43 -51 -114 -10 -68 -9 -81 5 -103 26 -40 60 -33 88 18
l23 42 67 3 c65 3 67 2 120 -41 38 -31 81 -53 144 -74 49 -17 110 -39 136 -49
40 -16 53 -17 100 -6 29 6 98 17 153 23 86 10 109 17 165 49 77 45 76 44 174
187 42 62 93 129 114 148 36 35 39 35 98 30 143 -14 168 62 57 173 -37 37 -64
53 -116 70 -38 12 -82 29 -97 37 -30 16 -64 16 -190 5z m67 -336 c4 -11 -73
-90 -116 -121 -56 -38 -298 -94 -404 -92 -102 2 -131 10 -135 36 -4 26 9 34
113 68 64 21 89 24 144 19 86 -8 213 23 291 72 54 34 99 41 107 18z m-617 -43
c0 -17 -52 -51 -79 -51 l-26 1 33 29 c31 29 72 40 72 21z"
        />
        <path d="M700 1155 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 -6 0 -6 -6 2 -15z" />
        <path
          className="beard"
          transform={getFeatureTranslate("beard")}
          d="M2635 835 c-29 -18 -54 -25 -90 -25 -30 0 -60 -7 -73 -16 -12 -8 -48
-18 -80 -21 -31 -3 -65 -12 -74 -21 -24 -20 -23 -57 2 -82 20 -20 35 -25 111
-35 49 -6 72 -24 82 -64 7 -30 -6 -56 -52 -102 -20 -19 -47 -47 -59 -62 -13
-15 -45 -33 -71 -41 -26 -8 -70 -25 -98 -39 -34 -18 -74 -28 -128 -32 -43 -4
-107 -15 -142 -26 -56 -18 -64 -23 -61 -42 4 -30 188 -122 261 -132 29 -4 83
-16 122 -26 74 -20 121 -19 230 6 33 8 103 21 155 31 52 9 118 25 145 35 28
11 59 19 70 19 34 0 78 34 189 147 118 120 146 157 146 190 0 45 -62 42 -182
-8 -46 -20 -98 -33 -141 -36 -61 -5 -73 -3 -132 26 -77 38 -95 54 -95 87 0 17
12 32 39 52 22 15 46 39 55 54 35 57 7 157 -50 178 -33 13 -33 13 -79 -15z"
        />
      </g>
      <circle
        transform={getFeatureTranslate()}
        className="eye"
        cx="157"
        cy="271"
        r="11"
        fill={color}
      />
      <circle
        transform={getFeatureTranslate()}
        className="eye"
        cx="289"
        cy="251"
        r="11"
        fill={color}
      />
      {/* <path
        transform={getFeatureTranslate("eyelid")}
        d=" M 129 267 C 129 271, 157 285, 181 265"
        stroke="black"
        fill="black"
      />
      <path
        transform="translate(0 -3.5)"
        d=" M 261 247 C 261 251, 289 265, 315 241"
        stroke="black"
        fill="black"
      /> */}
    </svg>
  );
}
