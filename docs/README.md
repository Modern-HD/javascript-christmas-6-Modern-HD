# 미션 - 크리스마스 프로모션

## 시나리오
- 식당 방문 일자를 입력 받는다.
- 주문할 메뉴와 개수를 입력받는다.
- <주문 메뉴>와 <할인 전 총주문 금액> 출력
- 혜택을 계산하고 <증정 메뉴>, <혜택 내역>, <총혜택 금액>, <할인 후 예상 결제 금액>, <12월 이벤트 배지> 출력

## 구현할 기능 목록
- 메뉴
    - 메뉴 이름을 키로, 메뉴 종류와 가격을 값으로, Map 형태로 저장한다.
- 가격 계산
    - 주문한 메뉴의 총 가격을 구하는 기능
    - 총혜택 금액을 계산하는 기능
- 이벤트 계산
    - 1000원부터 시작하여 크리스마스가 다가올수록 날마다 100원의 추가 금액을 계산하여 할인 금액을 반한하는 크리스마스 디데이 할인 기능
    - 평일이면 디저트 메뉴 1개당 2,023원씩 계산하여 할인 금액을 반환하는 평일 할인 기능
    - 주말이면 메인 메뉴를 1개당 2,023원씩 계산하여 할인 금액을 반환하는 주말 할인 기능
    - 12월 3, 10, 17, 24, 25, 31일이면 1000원의 할인 금액을 반환하는 특별 할인 기능
    - 할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 증정 여부를 반한하는 증정 이벤트 기능
    - 총혜택 금액에 따라 이벤트 배지를 반환하는 기능
- 입력
    - 식당 방분 날짜를 입력 받는 기능
    - 주문할 메뉴와 개수를 입력받는 기능
- 출력
    - 주문한 메뉴를 출력하는 기능
    - 할인 전 총주문 금액을 출력하는 기능
    - 증정 메뉴를 출력하는 기능
    - 혜택을 출력하는 기능
    - 총혜택 금액을 출력하는 기능
    - 할인 후 예상 결제 금액을 출력하는 기능
    - 12월 이벤트 배지를 출력하는 기능

## 예외 처리 목록
- 주문 공통 조건
    - 음료만 주문할 시, 주문할 수 없다.
    - 메뉴가 20개 초과 시, 주문할 수 없다.
- 이벤트 공통 조건
    - 크리스마스 디데이 할인을 제외한 다른 이벤트는 2023.12.1 ~ 2023.12.31에만 적용한다.
    - 총주문 금액 10,000원 미만일 시 이벤트를 적용하지 않는다.
- 입력
    - 방문할 날짜는 1 이상 31 이하의 숫자이여야하고 아닐 경우, "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."라는 에러 메시지를 출력 후, 다시 입력 받는다.
    - 메뉴 형식이 알맞지 않은 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지 출력 후, 다시 입력 받는다.
    - 메뉴의 개수에 1 이하의 숫자가 입력되는 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 출력 후, 다시 입력 받는다.
    - 중복 메뉴를 입력한 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지 출력 후, 다시 입력 받는다.
    - 고객이 메뉴판에 없는 메뉴를 입력하는 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 출력 후, 다시 입력 받는다.
