function LogoNormal(props) {
  const { color, width, height } = props;
  const { first, second } = color;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} version="1" viewBox="0 0 1500 1500">
      <path fill={second} d="M0 7500V0h15000v900H1110v14100H0V7500z" transform="matrix(.1 0 0 -.1 0 1500)"></path>
      <path
        fill={first}
        d="M2320 8430V1860h1868c1028 0 3881 3 6340 7l4472 6v3097h-870c-573 0-870 3-870 10s-938 10-2794 10H7673l-7-32c-5-26-105-131-484-511-315-316-490-485-516-497-73-34-146 13-146 93 0 41 1 42 452 494l453 453h-985v10010H2320V8430zm3886-2178c30-23 44-54 44-94 0-30-42-75-498-531-549-549-530-534-602-485-38 26-56 71-46 115 5 19 158 180 479 502 260 260 486 482 502 492 37 24 93 24 121 1zm15-1191c23-24 29-38 29-73v-43l-743-742c-725-725-743-743-781-743-30 0-45 7-72 34-38 38-44 78-20 124 8 15 340 352 738 750l724 722h48c39 0 53-5 77-29z"
        transform="matrix(.1 0 0 -.1 0 1500)"
      ></path>
      <path
        fill={first}
        d="M11870 10844c-349-182-541-283-1655-864-308-161-708-370-890-465-181-95-487-255-680-355-192-100-444-232-560-293-115-60-223-122-239-138-24-22-30-38-33-81-5-63 18-108 68-133 28-15 333-121 998-346 112-38 209-69 215-69 7 0 334 275 727 611 1620 1386 1801 1540 1803 1537 2-2-130-163-293-359s-492-592-731-880-544-656-678-817c-135-161-243-294-241-296 4-3 228-80 994-341 220-76 537-184 705-242 194-67 321-105 348-106 45 0 81 20 114 64 19 25 18 24 218 1369 97 653 156 1050 255 1715 43 283 74 527 72 548-3 21-12 49-21 62-19 29-85 65-118 65-13 0-183-84-378-186zM9480 7198c0-321 3-466 11-481 45-87 147-111 217-52 23 20 532 701 540 723 1 4-69 31-155 60-87 29-260 88-385 131l-228 79v-460z"
        transform="matrix(.1 0 0 -.1 0 1500)"
      ></path>
    </svg>
  );
}

export default LogoNormal;
