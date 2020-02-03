import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  //   CardSubtitle,
  Button
} from "reactstrap";
import DOMpurify from "dompurify";

import "../App.scss";

const FishResults = ({ fishData }) => {
  const selectedFishData = fishData;

  const fishCards = selectedFishData.map(f => {
    return (
      <Card key={f.ID} className="fishCard">
        <CardImg
          className="fishCardImg"
          src={f["Species Illustration Photo"].src}
          alt="Card image cap"
        />
        <CardBody className="fishCardBody">
          <CardTitle id="fishCardTitle">
            <div className="species-name">{f["Species Name"]}</div>
            <p>
              <strong>Scientific name: </strong>
              <i>{f["Scientific Name"]}</i>
              <br />
              <strong>Alternate names: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(
                    f["Species Aliases"].replace(/(<([^>]+)>)/gi, "")
                  )
                }}
              />
              <br />
              <br />
              <div className="recommendation-callout">
                <strong>Should you buy {f["Species Name"]}? </strong>
                Well, it depends! For more information on recommended harvest
                methods and source locations for this fish,{" "}
                <a
                  href={`https://seafood.ocean.org/seafood/search?keywords=${f["Scientific Name"]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  go here
                </a>
                .
              </div>
            </p>
          </CardTitle>
          <h3 className="fishSubtitle">➡️ Current Status</h3>
          <ul>
            <li>
              <strong>Population: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Population"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Population Status: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Population Status"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Fishing Rate: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Fishing Rate"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Harvest Type: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Harvest Type"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Harvest: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Harvest"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Location: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Location"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Availability: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Availability"])
                }}
              />
            </li>
            <br />
          </ul>

          <h3 className="fishSubtitle">➡️ About the {f["Species Name"]}</h3>
          <ul>
            <li>
              <strong>Physical Description: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Physical Description"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Biology: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Biology"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Habitat: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Habitat"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Animal Health: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Animal Health"])
                }}
              />
            </li>
            <br />
            <li>
              <strong>Fishery Management: </strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMpurify.sanitize(f["Fishery Management"])
                }}
              />
            </li>
            <br />
          </ul>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    );
  });

  return <div>{fishCards}</div>;
};

export default FishResults;

// NOT a smart seafood choice:
// Pacific sardines
// Northern shrimp
//
