import React, { createContext, useContext, useState, ReactNode } from "react";

type CustomComponentsType = {
  builder: {
    basic: {
      components: Record<string, boolean>;
    };
    customINFOInputComponents: {
      title: string;
      components: Record<string, boolean>;
    };
    customINFOComponents: {
      title: string;
      components: Record<string, boolean>;
    };
    customINFOLayout: {
      title: string;
      components: Record<string, boolean>;
    };
    infoCustomCharts: {
      title: string;
      components: Record<string, boolean>;
    };
  };
  sanitizeConfig: {
    addTags: string[];
    ALLOWED_TAGS: string[];
    allowedAttrs: string[];
    addAttr: string[];
    "X-Frame-Options": string;
  };
};

type CustomComponentsContextType = {
  customComponents: CustomComponentsType;
  setCustomComponents: React.Dispatch<
    React.SetStateAction<CustomComponentsType>
  >;
};

const CustomComponentsContext = createContext<
  CustomComponentsContextType | undefined
>(undefined);

export const CustomComponentsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [customComponents, setCustomComponents] =
    useState<CustomComponentsType>({
      builder: {
        basic: {
          components: {},
        },
        customINFOInputComponents: {
          title: "INFO Input Components",
          components: {
            customImageUploaderWithEditV0_1: true,
            customAudioComponentV0_1: true,
            customstarsRateingV0_1: true,
            customReCAPTCHAV0_1: true,
            customPhoneInput: true,
            customImageUploaderV0_1: true,
            customColorPickerV0_1: true,
            customSelectv0_1: true,
            customSelectv0_2: true,
            customFileUploaderV0_1: true,
            customOTP: true,
          },
        },
        customINFOComponents: {
          title: "INFO Components",
          components: {
            customckeditorV_5: true,
            customPopupV0_1: true,
            customTableComp: true,
            customCarouselV0_1: true,
            customAdvanceCrdv0_1: true,
            customAvailableTimes: true,
            customCodeEditorV0_1: true,
            customSwiperV0_1: true,
            customQRCodeV0_1: true,
            customcalendarCustomComp: true,
            Advancedtable: true,
            circularwithlabelV0_1: true,
            customGoogleMapV0_1: true,
            customparticipantsComp: true,
            customAdvanceCrdv0_2: true,
            customStepperINFOV0_1: true,
            customBreadcrumbV0_1: true,
            customEventsComp: true,
            customTimeZone: true,
            CustomAccordion: true,
            customAutoCompleteINFOV0_1: true,
            customScrollingMenuV_1: true,
            customPaginationINFOV0_1: true,
            customDynamincMenuV0_1: true,
            customBackground: true,
            customPdfViewerComponentV0_1: true,
            customPdfViewerComponentV0_2: true,
            customLogin: true,
            CustomShareBtnComponent: true,
            customTwitter: true,
            customYouTube: true,
            customSliderData: true,
            customHelpfulCom: true,
            customReportCom: true,
            CustomPrintComp: true,
            CustomReplyComp: true,
            customTreeV_01: true,
            custompartyCustomComp: true,
          },
        },
        customINFOLayout: {
          title: "INFO Layouts",
          components: {
            customFullWidthLayoutV0_1: true,
            HighchartsPieComponent: true,
            customLoaderV0_1: true,
            customBpmnBuilderV0_1: true,
            customColumnsV0_1: true,
            customHTMLV0_1: true,
            customContainerINFOv_01: true,
            customtextarea: true,
            // gridstackContainerINFOv_01: true,
            customFile: true,
            // mycustomcomponent: true,
            // sockettextfield: true,
          },
        },
        infoCustomCharts: {
          title: "INFO Charts",
          components: {
            HighchartsBarComponent: true,
          },
        },
      },
      sanitizeConfig: {
        addTags: ["iframe", "svg", "title", "path"],
        ALLOWED_TAGS: ["iframe", "svg", "title", "path"],
        addAttr: [
          "d",
          "transform",
          "fill",
          "viewBox",
          "xmlns",
          "stroke",
          "stroke-width",
          "stroke-dasharray",
        ],
        allowedAttrs: [
          "d",
          "transform",
          "fill",
          "viewBox",
          "xmlns",
          "stroke",
          "stroke-width",
          "stroke-dasharray",
        ],
        "X-Frame-Options": "allow",
      },
    });

  return (
    <CustomComponentsContext.Provider
      value={{ customComponents, setCustomComponents }}
    >
      {children}
    </CustomComponentsContext.Provider>
  );
};

export const useCustomComponents = () => {
  const context = useContext(CustomComponentsContext);
  if (!context) {
    throw new Error(
      "useCustomComponents must be used within a CustomComponentsProvider"
    );
  }
  return context;
};
