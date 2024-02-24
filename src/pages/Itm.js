import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const Itm = ({ busanFood }) => {
    const { itm } = useParams();
    const store = busanFood.find(it => it.TITLE === itm);


    const { kakao } = window;

    const KakaoMapScript = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(store.LAT, store.LNG),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(store.LAT, store.LNG);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }

    useEffect(() => {
        store && KakaoMapScript()
    }, [store])


    return (
        <section>
            <div className="map_wrap">
                <div id="map"></div>
            </div>
            <div className="store_info">
                <div className="sub_title">{itm}</div>
                <ul className="ul_detail">
                    {
                        store &&
                        <li className="detail_wrap">
                            <figure>
                                <img src={store.MAIN_IMG_NORMAL} alt={store.TITLE} />
                            </figure>
                            <dl>
                                <dt>가게이름</dt>
                                <dd className="store_title">{store.TITLE}</dd>
                                <dt>주소</dt>
                                <dd className="address"> {store.ADDR1}</dd>
                                <dt>전화번호</dt>
                                <dd className="tel"> {store.CNTCT_TEL}</dd>
                                <dt>영업시간</dt>
                                <dd className="time">{store.USAGE_DAY_WEEK_AND_TIME ? store.USAGE_DAY_WEEK_AND_TIME : '문의 바랍니다.'}</dd>
                                <dt>대표메뉴</dt>
                                <dd className="meun">{store.RPRSNTV_MENU ? store.RPRSNTV_MENU : '문의 바랍니다.'}</dd>
                                <dt className="desc_dt">소개</dt>
                                <dd className="desc">{store.ITEMCNTNTS}</dd>
                            </dl>
                        </li>
                    }
                </ul>
                <Comment />
            </div>

        </section >
    )
}

export default Itm;