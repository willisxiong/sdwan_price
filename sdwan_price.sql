CREATE TABLE sdwan_price (
    City VARCHAR(255),
    Device VARCHAR(255),
    Bandwidth VARCHAR(255),
    Price FLOAT
);

INSERT INTO sdwan_price (City, Device, Bandwidth, Price)
VALUES ("HK", "ve100b", "5m", 127.94)
       ,("HK", "ve100b", "10m", 127.94)
       ,("HK", "ve100b", "15m", 173.6)
       ,("HK", "ve100b", "25m", 200.65)
       ,("HK", "ve100b", "50m", 235.04);

INSERT INTO sdwan_price (City, Device, Bandwidth, Price)
VALUES ("MO", "c1111x-8p", "5m", 173.72);

INSERT INTO sdwan_price (City, Device, Bandwidth, Price)
VALUES ("MO", "c1111-8plte", "5m", 188.56);