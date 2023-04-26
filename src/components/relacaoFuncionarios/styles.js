import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 16px;

  div.filters {
    display: flex;
    min-height: 100px;
    gap: 50px;

    @media (max-width: 1024px) {
      width: 90%;
      margin: 0 auto;
      flex-direction: column;
    }
    @media (max-width: 1024px) {
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;

      @media (max-width: 1024px) {
        width: 100%;
        margin: 0 auto;
      }

      label {
        display: flex;
        flex-direction: column;

        input {
          padding: 0 10px;
          width: 100%;
          height: 50px;
          border: none;
          border-radius: 5px;
          border-bottom: 2px solid #ffa500;
          outline: none;
          display: flex;
          justify-content: space-between;
        }
      }

      button {
        padding: 5px;
        width: 100%;
        height: 40px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #ffa500;
        color: #111;
        margin-top: 5px;
        font-weight: bold;

        &:hover {
          background-color: #ff8c00;
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
  div.table-container {
    overflow-x: auto;

    @media (max-width: 1024px) {
      width: 90%;
      margin: 0 auto;
    }
    table {
      width: 100%;
      overflow-x: auto;

      thead {
        tr {
          background-color: #fafad2;
          height: 40px;
          th {
            min-width: 175px;
            background-color: #ffa940;
            border-radius: 5px;
          }
        }
      }
      tbody {
        tr {
          text-align: center;
          td {
            padding: 10px;
            border-bottom: 1px solid #111;
          }

          div {
            display: flex;
            gap: 5px;

            button {
              padding: 5px;
              width: 50%;
              height: 40px;
              border: 1px solid black;
              border-radius: 5px;
              background-color: #ffa500;
              font-weight: bold;
              color: #111;

              &:hover {
                background-color: #ff8c00;
                color: #000;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  div.mediaSalarial {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: end;

    span {
      border: 1px solid black;
      height: 40px;
      margin-right: none;
    }
    button {
      width: 20%;
      height: 40px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: #ffa500;
      color: #111;
      margin-left: none;
      font-weight: bold;

      &:hover {
        background-color: #ff8c00;
        color: #000;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;
