"use client";
import MenuList from "../components/menuList";
import parseCSV from "@/utils/parseCsv";
import { useState, useEffect } from "react";
import Spinner from "../components/spinner";

export default function RamazanMenu() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://docs.google.com/spreadsheets/d/e/2PACX-1vRr_pvtmF5j5_UArTWf3EhA3Epn59SbumVvenGqjlAouDWQFTwslH0UbuzrOrhpzj0FSaedLKnd5Git/pub?gid=1731691932&single=true&output=csv`
    )
      .then((response) => response.text())
      .then((data) => {
        const parsedData = parseCSV(data);
        setData(parsedData);
        console.log(parsedData);
      })
      .catch((err) => {
        //catch error
        console.error(err);
      })
      .finally(() => {
        //loading
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <Spinner />
      </div>
    );
  else
    return (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <div className="flex flex-col justify-center items-center px-5">
              <div className="flex flex-row justify-center items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="w-40 h-40"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                    }}
                    viewBox="0 0 60000 75000"
                  >
                    <path
                      className="fill-white"
                      d="M46560 45166c0 199-167 361-374 361-206 0-374-162-374-361l-35-18288v-22c-1703-1046-2379-2412-2693-3814l-2814-1020-638 1385c-21 54-64 100-123 126-118 51-256 1-309-113l-656-1398-1470 545v-1c-51 19-109 20-165 1-121-43-182-173-137-290l554-1429-3987-1693c-49-21-90-57-115-107l-1379-2685-1332 2655c-22 49-63 91-118 115l-3985 1742 547 1403c19 49 21 105 0 158-45 117-179 176-300 133l-1464-526-644 1381c-22 48-62 89-116 112-117 52-256 2-309-111l-655-1389-4065 1456c-445 1033-1189 1994-2527 2739 0 14 1 31 1 53l13 5820c0 199-167 361-374 361-206 0-374-162-374-361l-13-5820c0-12 0-32-1-50v-1c-5-263-8-419 315-595 2399-1305 2688-3471 2942-5384 42-319 84-632 132-926 1084-6613 6980-9729 9749-11192 738-390 1230-501 1218-569-15-86-81-203-149-322-257-453-520-918 139-1475 73-62 81-125 91-211 6-51 12-105 23-165 121-681 284-1445 474-1985 192-545 455-907 813-900 359 8 606 381 773 934 166 552 295 1321 383 2004 7 54 11 111 15 164 6 86 10 150 82 216 631 583 370 1040 116 1485-65 114-129 226-148 311-15 67 468 200 1184 622 2681 1581 8390 4947 9168 11600 37 317 63 620 90 930 166 1927 355 4110 2706 5517 289 173 286 303 281 542 0 17-1 35-1 49l35 18288zm-29362 4186 506 1435 1162 605c182 95 250 314 152 490-37 66-92 117-156 149l-1158 603-506 1435c-66 189-279 290-475 226-115-38-198-124-234-226l-506-1435-1162-605c-182-95-250-314-152-490 37-66 92-117 156-149l1158-603 506-1435c66-189 279-290 475-226 115 38 198 124 234 226zm-156 1802-199-564-199 564c-29 84-90 157-177 202l-680 354 675 352c83 41 150 113 182 205l199 564 199-564c29-84 90-157 177-202l680-354-675-352c-83-41-150-113-182-205zm20420-15589 567 2294 2345-674c124-36 254 32 291 152 28 91-6 186-79 242l-1762 1611 1778 1625c94 85 98 228 9 318-62 64-154 84-236 61v1l-2345-674-568 2299c-30 122-156 197-282 168-91-21-156-90-175-172l-567-2294-2345 674c-124 36-254-32-291-152-28-91 6-186 79-242l1762-1611-1778-1625c-94-85-98-228-9-318 62-64 154-84 236-61v-1l2345 674 568-2299c30-122 156-197 282-168 91 21 156 90 175 172zm168 2631-397-1609-398 1609-3 12c-37 120-167 188-291 152l-1644-473 1246 1139 9 9c88 90 84 233-9 318l-1246 1139 1634-470c7-2 15-5 23-6 126-29 252 46 282 168l398 1609 397-1609 3-12c37-120 167-188 291-152l1644 473-1246-1139-9-9c-88-90-84-233 9-318l1246-1139-1634 470c-7 2-15 5-23 6-126 29-252-46-282-168zm5360 447c129 0 233 101 233 225 0 125-105 225-233 225l-2405-3c-129 0-233-101-233-225 0-125 105-225 233-225l2405 3zm-3074-4713c67-106 211-140 321-75s145 204 78 310l-1257 1981c-67 106-211 140-321 75s-145-204-78-310l1257-1981zm-6026 235c-67-106-32-245 78-310s254-31 321 75l1257 1981c67 106 32 245-78 310s-254 31-321-75l-1257-1981zm-171 4578c129 0 233 101 233 225 0 125-105 225-233 225l-2405-3c-129 0-233-101-233-225 0-125 105-225 233-225l2405 3zm1428 2977c67-106 211-140 321-75s145 204 78 310l-1257 1981c-67 106-211 140-321 75s-145-204-78-310l1257-1981zm3512 235c-67-106-32-245 78-310s254-31 321 75l1257 1981c67 106 32 245-78 310s-254 31-321-75l-1257-1981zm-25332-2468 804 2280 1857 967c182 95 250 314 152 490-37 66-92 117-156 149l-1853 965-804 2280c-66 189-279 290-475 226-115-38-198-124-234-226l-804-2280-1857-967c-182-95-250-314-152-490 37-66 92-117 156-149l1853-965 804-2280c66-189 279-290 475-226 115 38 198 124 234 226zm142 2647-497-1409-497 1409c-29 84-90 157-177 202l-1376 717 1371 714c83 41 150 113 182 205l497 1409 497-1409c29-84 90-157 177-202l1376-717-1371-714c-83-41-150-113-182-205zm8137-11045c93-86 241-84 331 6s87 233-6 319c-1640 1519-2635 3251-3199 5030-566 1785-700 3620-615 5335 6 125-94 230-223 236s-238-90-244-215c-87-1759 51-3646 635-5487 586-1848 1620-3648 3322-5224zm28610 17392c-148 406-311 799-489 1181-1890 4062-5242 6305-8909 7265-3642 953-7597 633-10725-431-415-141-819-297-1210-467-1493-648-3146-1877-4576-3303-1433-1429-2653-3066-3274-4523-65-152-129-309-192-473-1194-3086-1584-7041-523-10683 1068-3663 3595-7011 8235-8853 167-66 341-132 521-197 193-70 409 25 481 212 40 104 27 215-26 305l1 1c-2712 4582-3474 8701-2855 12102 461 2534 1690 4672 3449 6306 1764 1638 4064 2773 6660 3294 3902 784 8469 182 12899-2172 181-96 409-32 508 143 53 94 59 201 25 294zm-1171 886c37-79 73-160 109-241-4314 2066-8717 2561-12522 1796-2733-549-5159-1747-7026-3481-1872-1738-3179-4011-3669-6702-606-3331 42-7300 2430-11683-4095 1780-6353 4844-7327 8185-1017 3488-642 7278 502 10236 58 149 119 299 183 450 584 1372 1746 2926 3119 4294 1371 1367 2941 2538 4345 3148 365 158 751 307 1155 444 2999 1020 6791 1328 10282 414 3467-907 6635-3026 8420-6860zm-6062-26845c-96-571-145-1142-193-1694-16-182-31-361-48-533l-1254 550 528 1327 966 350zm-309-2834c-93-680-242-1323-436-1932l-226 84-521 1340 1183 509zm-773-2849c-330-793-738-1523-1197-2192l-1054 2181 597 1182 1400-519 254-652zm-1504-2622c-731-980-1566-1824-2413-2548l-2177 1002 2127 887c51 20 95 58 121 110l1333 2640 1010-2090zm-2801-2871c-606-492-1211-924-1781-1301l-1378 511-516 1329 1314 548 2361-1086zm-3742-574-307 114-655 243 192 408 407 170 363-934zm-1921 712c-55 20-113 19-165 1l-545-198-227 493c-23 51-64 89-112 111l-530 249 195 490c22 55 20 112-1 162h1l-212 524 517 218c53 22 93 61 116 107l264 513 501-188c57-21 117-20 169 0l521 198 251-501c24-48 64-84 110-106l531-244-198-493c-22-56-20-115 2-167l204-525-510-213c-59-24-102-69-124-122l-237-504-522 193zm-2706-920-31-11-1687-611c-635 384-1311 829-1986 1343l2939 1241 1301-611-537-1351zm-4112 1040c-689 555-1369 1184-1995 1898l1249 2707 1066-2207c22-46 60-85 110-108l2365-1110-2794-1180-2-1zm-2326 2290c-497 611-953 1281-1343 2013 1 2 2 4 2 6l639 1607 1403 508 617-1277-1318-2857zm-1621 2571c-95 204-184 412-268 624l603 219-335-843zm-426 1049c-210 604-376 1243-487 1921-4 23-8 47-11 70l661 284 1349-592-528-1327-985-357zm-567 2456c-7 49-14 99-20 149l181-80-161-69zm-91 676c-102 750-223 1529-472 2283l2134-764 506-1302-1345-578-824 361zm9033-11614 469 1181 33 12 1355 491 599-1299-663-1410c-279 225-727 462-1287 758-158 84-327 173-505 268zm2104-1455 606 1287 546-1185c-23-70-27-141-11-214 42-191 133-349 224-509 117-206 238-416 22-616-280-259-293-441-310-688-2-36-5-74-12-125-86-659-206-1392-357-1891-75-248-29-413-69-413-40-1-3 165-90 410-175 497-329 1222-445 1874-8 44-13 85-17 123-29 246-50 427-343 675-208 176-90 384 25 587 98 173 195 345 231 548 8 46 8 91 0 135zm1475 510-611 1326 613 1303 760-282 614-228 392-1010c-204-123-397-236-576-342-509-300-922-544-1192-768zm2172 1355-213 549 686-254c-162-103-319-201-472-295zm-6010 507 144 52-297-746c-221 121-452 250-691 388l844 306zm952 827 374 942 418-196 181-393-973-353zm269 1934-148-372-906 425 882 372 172-426zm87 1028-390 964 1019-382-207-403-422-178zm-620 1534-726 1796c-26 65-81 112-145 132l-1692 635-555 1373 1337 575 2359-1031 1456-2903-577-1123-1458 547zm-1124 1539 532-1317-1208 453-532 1317 1208-453zm763-1888 552-1367-1264-534-2649 1243-1203 2491 582 1261 1419-532 726-1796c26-65 81-112 145-132l1692-635zm-2794 3133-998 374 191 414 415 179 391-967zm-1434 538-524 197c-58 22-119 19-173-2l-528-192-238 493c-26 55-72 94-126 115l-519 228 200 504c21 53 20 110 1 159l-205 527 511 220c56 24 97 67 120 117l236 501 527-189c62-22 126-18 181 8l525 189 229-492c24-52 67-91 117-113l526-230-198-507c-21-54-19-112 1-162l210-520-518-222c-55-24-95-65-118-114l-237-514zm-610-255 420-157-408-883-430 889 417 151zm-1055 99-981-356 369 929 426-187 187-386zm8539-8472-419 908 436 158 412-153-430-913zm-9409 9655-946 415 941 404 164-421-158-398zm4773 411-937-403-170 420 155 399 952-416zm-4869 1926 946-339-188-398-404-174-354 910zm1994-231-414 148 427 906 419-899-432-155zm1064-99 954 343-355-912-418 183-180 386zm6434-7207-376 141 397 773 381-760-402-153zm1043-88 1021 389-395-984-426 196-200 399zm1612 615 1861 709c68 26 116 78 137 140l659 1644 1442 550 559-1156-1461-2893-2426-1012-1333 614 563 1404zm1595 1094-1365-520 471 1174 1365 520-471-1174zm-1956-746-1455-555-555 1106 1503 2925 2360 1002 1361-597-557-1388-1861-709c-68-26-116-78-137-140l-659-1644zm3249 2719 391 975 429-188 194-401-1014-386zm560 1397 201 502c22 56 20 115-2 167l-203 522 510 217c57 24 99 68 121 119l237 506 523-194c61-23 126-19 181 6l529 192 227-494c24-53 67-92 117-114l530-232-200-504c-21-53-20-110-1-159l205-527-511-220c-52-23-92-61-115-107h-1l-259-512-507 188c-56 21-116 19-168-1v1l-529-202-242 502c-25 51-66 89-116 110l-531 233zm-266 585-160-398-955 419 950 404 165-424zm99 1030-363 935 959-355-191-408-405-172zm1642 677-414 154 430 916 420-912-435-158zm1064-96 973 353-369-929-424 186-180 390zm-6718-8488 932-429-917-382-167 430 153 381zm7580 7302 946-415-941-404-164 421 158 398zm107-2366-976 362 204 403 407 175 365-940zm-2002 260 382-142-413-818-387 800 418 159z"
                      style={{
                        fillRule: "nonzero",
                      }}
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl text-white/80">Ramadan Kareem</span>
                  <span className="text-md text-white/80 font-light">
                    Sahoor Menu
                  </span>
                </div>
              </div>

              <MenuList data={data} />
            </div>
          </div>
        </div>
      </>
    );
}
